import React from "react";
import ReactMarkdown from "react-markdown";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

// Types for markdown components
import type { Components } from "react-markdown";

interface MessageProps {
  content: string;
  timestamp?: string;
  borderless?: boolean;
  className?: string;
}

// Helper function to determine if a URL is external
const isExternalLink = (href?: string): boolean => {
  if (!href) return false;
  return href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//');
};

// Helper function to validate safe URLs (prevent XSS)
const isSafeUrl = (href?: string): boolean => {
  if (!href) return true;
  // Allow http, https, protocol-relative, internal paths, and anchors
  return (
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('//') ||
    href.startsWith('/') ||
    href.startsWith('#') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:')
  );
};

// Custom markdown components with enhanced styling and accessibility
const defaultComponents: Partial<Components> = {
  // Links with external detection, security, and accessibility
  a: ({ href, children }) => {
    // Security check
    if (!isSafeUrl(href)) {
      return <span className="text-gray-600">{children}</span>;
    }

    const isExternal = isExternalLink(href);

    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        aria-label={isExternal ? `${children} (opens in new tab)` : undefined}
        className={cn(
          "text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300",
          "underline decoration-blue-400 hover:decoration-blue-600",
          "transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
          isExternal && "inline-flex items-center gap-1"
        )}
      >
        {children}
        {isExternal && <ExternalLink className="w-3 h-3" aria-hidden="true" />}
      </a>
    );
  },

  // Paragraphs with improved spacing
  p: ({ children }) => (
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3 text-sm">
      {children}
    </p>
  ),

  // Unordered lists
  ul: ({ children }) => (
    <ul className="list-disc list-inside space-y-1 mb-3 text-sm text-gray-600 dark:text-gray-300">
      {children}
    </ul>
  ),

  // Ordered lists
  ol: ({ children }) => (
    <ol className="list-decimal list-inside space-y-1 mb-3 text-sm text-gray-600 dark:text-gray-300">
      {children}
    </ol>
  ),

  // List items
  li: ({ children }) => (
    <li className="text-gray-600 dark:text-gray-300 leading-relaxed ml-4">
      {children}
    </li>
  ),

  // Blockquotes with blue left border
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 py-2 my-3 italic text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50">
      {children}
    </blockquote>
  ),

  // Headings with proper hierarchy
  h1: ({ children }) => (
    <h1 className="text-2xl font-bold mb-4 mt-6 text-gray-900 dark:text-gray-100">
      {children}
    </h1>
  ),

  h2: ({ children }) => (
    <h2 className="text-xl font-bold mb-3 mt-5 text-gray-900 dark:text-gray-100">
      {children}
    </h2>
  ),

  h3: ({ children }) => (
    <h3 className="text-lg font-semibold mb-2 mt-4 text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  ),

  h4: ({ children }) => (
    <h4 className="text-base font-semibold mb-2 mt-3 text-gray-900 dark:text-gray-100">
      {children}
    </h4>
  ),

  h5: ({ children }) => (
    <h5 className="text-sm font-semibold mb-2 mt-3 text-gray-900 dark:text-gray-100">
      {children}
    </h5>
  ),

  h6: ({ children }) => (
    <h6 className="text-sm font-semibold mb-2 mt-2 text-gray-900 dark:text-gray-100">
      {children}
    </h6>
  ),

  // Code blocks with inline vs block distinction
  code: ({
    inline,
    className,
    children,
    ...props
  }: {
    inline?: boolean;
    className?: string;
    children?: React.ReactNode;
  } & React.HTMLAttributes<HTMLElement>) => {
    return inline ? (
      <code
        className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-xs font-mono text-gray-800 dark:text-gray-200"
        {...(props as React.HTMLAttributes<HTMLElement>)}
      >
        {children}
      </code>
    ) : (
      <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto my-2 font-mono">
        <code
          className={className}
          {...(props as React.HTMLAttributes<HTMLElement>)}
        >
          {children}
        </code>
      </pre>
    );
  },

  // Horizontal rule
  hr: () => (
    <hr className="my-4 border-gray-300 dark:border-gray-700" />
  ),

  // Strong/bold text
  strong: ({ children }) => (
    <strong className="font-bold text-gray-900 dark:text-gray-100">
      {children}
    </strong>
  ),

  // Emphasis/italic text
  em: ({ children }) => (
    <em className="italic text-gray-700 dark:text-gray-300">
      {children}
    </em>
  ),

  // Strikethrough text
  del: ({ children }) => (
    <del className="line-through text-gray-500 dark:text-gray-400">
      {children}
    </del>
  ),

  // Tables
  table: ({ children }) => (
    <div className="overflow-x-auto my-3">
      <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
        {children}
      </table>
    </div>
  ),

  thead: ({ children }) => (
    <thead className="bg-gray-100 dark:bg-gray-800">
      {children}
    </thead>
  ),

  tbody: ({ children }) => (
    <tbody className="bg-white dark:bg-gray-900">
      {children}
    </tbody>
  ),

  tr: ({ children }) => (
    <tr className="border-b border-gray-300 dark:border-gray-700">
      {children}
    </tr>
  ),

  th: ({ children }) => (
    <th className="px-4 py-2 text-left font-semibold text-gray-900 dark:text-gray-100 text-sm">
      {children}
    </th>
  ),

  td: ({ children }) => (
    <td className="px-4 py-2 text-gray-700 dark:text-gray-300 text-sm">
      {children}
    </td>
  ),
};

// Main Message component
export const Message: React.FC<MessageProps> = ({
  content,
  timestamp,
  borderless = false,
  className,
}) => {
  // Format timestamp if provided
  const formattedTimestamp = timestamp
    ? new Date(timestamp).toLocaleString()
    : null;

  return (
    <div
      className={cn(
        borderless ? "p-0" : "bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm p-4",
        className
      )}
    >
      <div className="prose prose-sm max-w-none dark:prose-invert">
        <ReactMarkdown components={defaultComponents}>
          {content}
        </ReactMarkdown>
      </div>

      {formattedTimestamp && (
        <time className="text-sm text-gray-500 dark:text-gray-400 mt-2 block">
          {formattedTimestamp}
        </time>
      )}
    </div>
  );
};

export default Message;
