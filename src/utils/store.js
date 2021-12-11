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

export default data;