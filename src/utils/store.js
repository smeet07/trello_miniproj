const cards=[
    {
        id: "card-1",
        title: 'Learn React'
    },
    {
        id: "card-2",
        title: 'Complete SC 10'
    },
    {
        id: "card-3",
        title: 'SC Report'
    },
];

const data={
    lists:{
        'list-1':{
            id: 'list-1',
            title: 'To Do',
            cards,
        },
        'list-2':{
            id: 'list-2',
            title: 'Doing',
            cards:[],
        },
    },
    listIds:['list-1','list-2'],
};

// const data={
//     "ishita":{
//         "email": "ishita.rai@somaiya.edu",
//         "name":"ishita",
//         "password":"test",
//         "projects":{
//             "project-1":{
//                 "id":"project-1",
//                 "title":"project 1",
//                 "bg":"",
//                 "team":["ishita","smeet","srinil"],
//                 "lists":{
//                     "list-1":{
//                         "id": "list-1",
//                         "title": "To Do",
//                         "cards":[
//                             {
//                                 "id": "card-1",
//                                 "title": "Learn React"
//                             },
//                             {
//                                 "id": "card-2",
//                                 "title": "Complete SC 10"
//                             },
//                             {
//                                 "id": "card-3",
//                                 "title": "SC Report"
//                             }
//                         ]
//                     },
//                     "list-2":{
//                         "id": "list-2",
//                         "title": "Doing",
//                         "cards":[
//                             {
//                                 "id": "card-1",
//                                 "title": "hello"
//                             },
//                             {
//                                 "id": "card-2",
//                                 "title": "something"
//                             }
//                         ]
//                     },
//                     "listIds":["list-1","list-2"]
//                 }
//             },
//             "project-2":{
//                 "id":"project-2",
//                 "title":"project 2",
//                 "team":["ishita","smeet"],
//                 "lists":{
//                     "list-1":{
//                         "id": "list-1",
//                         "title": "To Do",
//                         "cards":[
//                             {
//                                 "id": "card-1",
//                                 "title": "Vivas"
//                             }
//                         ]
//                     },
//                     "list-2":{
//                         "id": "list-2",
//                         "title": "Doing",
//                         "cards":[
//                             {
//                                 "id": "card-1",
//                                 "title": "hello"
//                             },
//                             {
//                                 "id": "card-2",
//                                 "title": "world"
//                             }
//                         ]
//                     },
//                     "listIds":["list-1","list-2"]
//                 }
//             }
//         }
//     },
//     "srinil":{
//         "email": "srinil.k@somaiya.edu",
//         "name":"srinil",
//         "password":"test",
//         "projects":{
//             "project-1":{
//                 "id":"project-1",
//                 "title":"project 1",
//                 "team":["ishita","smeet","srinil"],
//                 "lists":{
//                     "list-1":{
//                         "id": "list-1",
//                         "title": "To Do",
//                         "cards":[
//                             {
//                                 "id": "card-1",
//                                 "title": "Learn React"
//                             },
//                             {
//                                 "id": "card-2",
//                                 "title": "Complete SC 10"
//                             },
//                             {
//                                 "id": "card-3",
//                                 "title": "SC Report"
//                             }
//                         ]
//                     },
//                     "list-2":{
//                         "id": "list-2",
//                         "title": "Doing",
//                         "cards":[
//                             {
//                                 "id": "card-1",
//                                 "title": "hello"
//                             },
//                             {
//                                 "id": "card-2",
//                                 "title": "something"
//                             }
//                         ]
//                     },
//                     "listIds":["list-1","list-2"]
//                 }
//             }
//         }
//     },
//     "smeet":{
//         "email": "smeet.bn@somaiya.edu",
//         "name":"smeet",
//         "password":"test",
//         "projects":{
//             "project-1":{
//                 "id":"project-1",
//                 "title":"project 1",
//                 "team":["ishita","smeet","srinil"],
//                 "lists":{
//                     "list-1":{
//                         "id": "list-1",
//                         "title": "To Do",
//                         "cards":[
//                             {
//                                 "id": "card-1",
//                                 "title": "Learn React"
//                             },
//                             {
//                                 "id": "card-2",
//                                 "title": "Complete SC 10"
//                             },
//                             {
//                                 "id": "card-3",
//                                 "title": "SC Report"
//                             }
//                         ]
//                     },
//                     "list-2":{
//                         "id": "list-2",
//                         "title": "Doing",
//                         "cards":[
//                             {
//                                 "id": "card-1",
//                                 "title": "hello"
//                             },
//                             {
//                                 "id": "card-2",
//                                 "title": "something"
//                             }
//                         ]
//                     },
//                     "listIds":["list-1","list-2"]
//                 }
//             },
//             "project-2":{
//                 "id":"project-2",
//                 "title":"project 2",
//                 "team":["ishita","smeet"],
//                 "lists":{
//                     "list-1":{
//                         "id": "list-1",
//                         "title": "To Do",
//                         "cards":[
//                             {
//                                 "id": "card-1",
//                                 "title": "Vivas"
//                             }
//                         ]
//                     },
//                     "list-2":{
//                         "id": "list-2",
//                         "title": "Doing",
//                         "cards":[
//                             {
//                                 "id": "card-1",
//                                 "title": "hello"
//                             },
//                             {
//                                 "id": "card-2",
//                                 "title": "world"
//                             }
//                         ]
//                     },
//                     "listIds":["list-1","list-2"]
//                 }
//             }
//     }
//     }
// }

export default data;