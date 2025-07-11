# Copilot Tips & Prompts 🔥

## 🧠 Prompt Engineering Tips
- Use descriptive comments.
- Be specific about input/output formats.
- Use "//" comments in code blocks to control output.

### Example 1: Regex
```js
// regex to validate Indian PAN number
const panRegex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
```

### Example 2: Backend API Stub
```java
// create spring boot REST API for employee details
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    @GetMapping("/{id}")
    public Employee getEmployee(@PathVariable Long id) {
        // implementation here
    }
}
```

## 🚀 Productivity Tips
- Use `// unit test for` to generate test cases.
- Use `// describe algorithm to` for explanations.
- Use `/* Copilot: generate SQL insert */` to auto-complete DB scripts.
