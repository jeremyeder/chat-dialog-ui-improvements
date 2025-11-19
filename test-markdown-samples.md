# Test Markdown Samples for Message Component

This file contains comprehensive markdown samples to test all the improvements made to the Message component.

---

## 1. Links Testing

### External Links (should open in new tab with icon)
- Visit [Google](https://www.google.com)
- Check out [GitHub](https://github.com)
- Read [MDN Docs](https://developer.mozilla.org)
- Protocol-relative: [Example](//example.com)

### Internal Links (should stay in current tab, no icon)
- Navigate to [Home](/)
- Go to [About](/about)
- Jump to [Section](#section)

### Special Protocol Links
- Email me at [contact@example.com](mailto:contact@example.com)
- Call us at [555-1234](tel:555-1234)

### Security Test (should be sanitized)
These should NOT execute JavaScript:
- [Safe Link](javascript:alert('XSS'))
- [Another Safe Link](vbscript:msgbox)

---

## 2. Lists Testing

### Unordered Lists
- First item
- Second item
- Third item with a [link](https://example.com)
- Fourth item

### Ordered Lists
1. Step one
2. Step two
3. Step three with **bold text**
4. Step four

### Nested Lists
- Parent item 1
  - Child item 1.1
  - Child item 1.2
- Parent item 2
  - Child item 2.1
    - Grandchild item 2.1.1

---

## 3. Blockquotes Testing

> This is a simple blockquote.

> This is a longer blockquote that contains multiple sentences. It should have a blue left border and italic styling. The background should be slightly tinted for better visibility.

> This blockquote contains **bold text** and *italic text* as well as a [link](https://example.com).

---

## 4. Code Blocks Testing

### Inline Code
Here is some `inline code` within a paragraph. It should have a gray background and proper padding.

### Block Code
```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
  return `Welcome, ${name}`;
}

greet("World");
```

```python
def calculate_total(items):
    total = sum(item['price'] for item in items)
    return total
```

---

## 5. Headings Testing

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

---

## 6. Text Formatting

This paragraph contains **bold text**, *italic text*, and ~~strikethrough text~~.

You can also combine them: ***bold and italic***, **bold with a [link](https://example.com)**, and *italic with `code`*.

---

## 7. Horizontal Rules

Above this line.

---

Below this line.

---

## 8. Tables

| Feature | Status | Priority |
|---------|--------|----------|
| Clickable Links | ✅ Done | High |
| List Styling | ✅ Done | High |
| Blockquotes | ✅ Done | Medium |
| Code Blocks | ✅ Done | Medium |
| Headings | ✅ Done | Medium |
| Tables | ✅ Done | Low |

---

## 9. Mixed Content Test

Here's a complex example combining multiple elements:

### Authentication System

Our authentication system supports multiple methods:

1. **Email/Password Authentication**
   - Standard login form
   - Password reset functionality
   - Email verification required

2. **OAuth Integration**
   - Google OAuth
   - GitHub OAuth
   - See the [OAuth docs](https://oauth.net/2/) for details

3. **API Token Authentication**
   - Generate tokens in settings
   - Use `Authorization: Bearer <token>` header
   - Tokens expire after 30 days

> **Security Note:** Always use HTTPS in production. Never commit API tokens to version control.

Example code for API authentication:

```javascript
const response = await fetch('https://api.example.com/data', {
  headers: {
    'Authorization': `Bearer ${apiToken}`,
    'Content-Type': 'application/json'
  }
});
```

For more information:
- Read the [API Documentation](/docs/api)
- Contact [support@example.com](mailto:support@example.com)
- Join our [community forum](https://forum.example.com)

---

## 10. Dark Mode Test

All elements should have proper dark mode variants:
- Text should be readable (gray-300, gray-100)
- Links should be blue-400 in dark mode
- Backgrounds should use gray-800/900
- Borders should be gray-700
- Code blocks should have dark backgrounds

---

## Testing Checklist

After rendering this markdown, verify:

- [x] External links are blue, underlined, and open in new tab
- [x] External links show an external link icon
- [x] Internal links stay in current tab (no icon)
- [x] Links have visible hover and focus states
- [x] JavaScript URLs are sanitized
- [x] Lists have proper bullets/numbers and spacing
- [x] List items are indented correctly
- [x] Blockquotes have blue left border and italic styling
- [x] Inline code has gray background and padding
- [x] Block code has dark background and adequate padding
- [x] All heading levels render with proper hierarchy
- [x] Bold, italic, and strikethrough text render correctly
- [x] Horizontal rules are visible
- [x] Tables have borders and proper cell padding
- [x] Dark mode styling works for all elements
- [x] Paragraphs have proper spacing (mb-3)
- [x] Message card has adequate padding (p-4)
- [x] Text is readable and accessible
