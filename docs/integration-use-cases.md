# DTO-Specific Copilot Use Cases 🔗

## 🔒 Security Team Example
```python
# copilot prompt: encode and decode JWT using secret key
import jwt

def create_token(data, secret):
    return jwt.encode(data, secret, algorithm="HS256")

def decode_token(token, secret):
    return jwt.decode(token, secret, algorithms=["HS256"])
```

## 🛠️ Backend Team Example
```java
// copilot prompt: create DTO and service method for account transfer
public class TransferDto {
    private String fromAccount;
    private String toAccount;
    private BigDecimal amount;
}
```

## 📲 Mobile Team Example (Angular/Ionic)
```typescript
// copilot prompt: create login form group with validation
this.loginForm = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', Validators.required]
});
```
