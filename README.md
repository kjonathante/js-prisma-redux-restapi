# Javascript - Prisma - MySQL - React - Redux 
#### Tech Stack
### Backend
1. Node/Express
2. Prisma Client Lib
3. MySQL Server running inside a container
4. Prisma Server running inside a container
### Frontend
1. React
2. Redux (Asynchronous Redux Without Middlewares)*
3. Isomorphic Fetch

#### *Source:
[André Gardi @ Medium](https://medium.com/javascript-in-plain-english/asynchronous-redux-without-middlewares-using-es2017-a42c2699d4d0)

[Stack Overflow](https://stackoverflow.com/questions/34401098/remove-a-property-in-an-object-immutably)

### Shape of State
```javascript
{
  status: '...',
  allIds: ['id0', 'id1'],
  byIds: {
    [id0]: {
      message: "..."
    },
    [id1]: {
      message: "..."
    }
  }
}
```
### Immutability
#### CREATE
```javascript
  case CREATE: {
    const { id, message } = action.payload;
    return {
      ...state,
      allIds: [...state.allIds, id],
      byIds: {
        ...state.byIds,
        [id]: {
          message
        }
      },
      status: SUCCESS
    };
  }
```
#### UPDATE
``` javascript
  case UPDATE: {
    const { id, message } = action.payload;
    return {
      ...state,
      byIds: {
        ...state.byIds,
        [id]: {
          ...state.byIds[id],
          message: message
        }
      },
      status: SUCCESS
    };    
  }
```
#### DELETE
``` javascript
  case DELETE: {
    const { id } = action.payload;
    const { allIds, byIds, ...noChild } = state;
    const newAllIds = allIds.filter(element => id !== element);
    const { [id]: removedValue, ...newByIds } = byIds;
    return { ...noChild, allIds: newAllIds, byIds: newByIds, status: SUCCESS };
  }
```
### Workflow
1. services/messages
2. actions/ActionTypes
3. actions/messages
4. reducers/messages

Setup Prisma
```
docker-compose up -d
prisma init --endpoint http://localhost:4466
prisma deploy
prisma generate
npm install --save prisma-client-lib
```

prisma.yml
```
endpoint: http://localhost:4466
datamodel: datamodel.prisma
generate:
  - generator: javascript-client
    output: ../server/generated/prisma-client/
hooks:
  post-deploy:
    - prisma generate
```