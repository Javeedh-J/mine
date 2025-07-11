# Using Copilot with Pro*C, KSH, and Control-M 🛠️

## 🔸 Pro*C Example

```c
/* Pro*C to retrieve inactive users */
EXEC SQL DECLARE inactive_users CURSOR FOR
SELECT user_id FROM users WHERE last_login < SYSDATE - 90;
```

## 🔸 KSH Example

```ksh
#!/bin/ksh
# KSH script to run Pro*C batch and alert on failure
sqlplus -s user/password@db <<EOF
@run_proc.sql
EOF

if [ $? -ne 0 ]; then
  echo "Batch Failed" | mailx -s "Batch Alert" ops@dto.com
fi
```

## 🔸 Control-M Example

```yaml
JobName: RunProCBatch
Command: /opt/dto/batch/proc_runner.ksh
On-Error: SendEmail("Failure", ops@dto.com)
```
