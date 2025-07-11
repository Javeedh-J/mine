# DTO API Standards 📘

This page contains best practices and naming conventions for Spring Boot REST APIs used in DTO.

## 🔹 URL Design

- ✅ Use nouns for resources: `/customers`
- ✅ Use sub-resources: `/customers/{id}/accounts`
- ❌ Avoid verbs in endpoints: `/getCustomer` ❌

## 🔹 DTO Design

```java
public class CustomerDto {
    private Long id;
    private String name;
    private String email;
}
```

## 🔹 Controller Example

```java
@GetMapping("/customers/{id}")
public ResponseEntity<CustomerDto> getCustomer(@PathVariable Long id) {
    return ResponseEntity.ok(customerService.getCustomerById(id));
}
```

## 🔹 Status Codes

- 200 OK - Success
- 201 Created - On POST
- 400 Bad Request - Invalid input
- 404 Not Found - Resource missing
