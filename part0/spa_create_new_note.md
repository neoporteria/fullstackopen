```mermaid

sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: clicks on Save 
    activate browser
    Note right of browser: The browser executes the callback function that re-renders the list
    Note right of browser: The browser executes the callback function that send the data to the server
    browser->>server: POST /new_note_spa
    deactivate browser
    
    activate server
    server-->>browser: 201 Created message of succesfull creation of the data
    deactivate server

    
```
