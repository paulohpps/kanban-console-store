# Kanban Console API

ASP.NET Core 8 minimal API, SQLite sem ORM. Executa em `http://0.0.0.0:3001`.

```sh
DATA_DIR=/opt/data /opt/data/.dotnet/dotnet run --project /opt/data/kanban-console/api
```

`DATA_DIR` (padrão `/data`) contém `kanban.db` (board `default`, único gravável), `kanban/boards/*/kanban.db` (somente leitura), `logs/agent.log` e, opcionalmente, `profiles/`.

| Método | Rota | Resultado |
| --- | --- | --- |
| GET | `/api/boards` | `{id,name,path,counts}[]` |
| GET | `/api/boards/{board}/tasks` | tasks agrupadas por status |
| GET | `/api/tasks/{board}/{taskId}` | `{task,runs,comments}` |
| GET | `/api/tasks/{board}/{taskId}/console` | `{events,log}`: 200 eventos e 200 linhas |
| GET | `/api/stream/{board}/{taskId}` | SSE `event` e `log`, heartbeat, polling de 1s |
| GET | `/api/profiles` | perfis de assignees e diretórios de profiles |
| POST | `/api/tasks` | body `{board?,title,body,assignee,priority?}`; resposta 201 `{id}`; apenas board `default` |

Todas as leituras abrem SQLite em `ReadOnly`; INSERT parametrizado abre `ReadWrite` com `busy_timeout=5000` e transação curta. IDs de board são restritos a letras ASCII, dígitos, hífen e underscore.
