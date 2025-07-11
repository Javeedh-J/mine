# Getting Started with GitHub Copilot at DTO

Here’s how to get up and running:

### 🔐 Step 1: Ensure You Have Access
- Must have a GitHub Copilot license enabled.
- Ask your admin if you don’t see it in your GitHub settings.

### ⚙️ Step 2: Install the Extension
- For VS Code:  
  Go to Extensions → Search `GitHub Copilot` → Click Install.

### ✍️ Step 3: Start Typing!
- Copilot works best when you:
  - Add comments (e.g., `// generate dto class for customer`)
  - Use method/function stubs (e.g., `function validateInput() {`)
  - Describe your intent clearly.

### ✅ Example
```typescript
// generate DTO for user registration
interface UserRegistrationDto {
  username: string;
  email: string;
  password: string;
}
```
