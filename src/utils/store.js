const cards=[
    {
        id: "card-1",
        content: 'Learn React'
    },
    {
        id: "card-2",
        content: 'Complete SC 10'
    },
    {
        id: "card-3",
        content: 'SC Report'
    },
];

const data={
    lists:{
        'list-1':{
            id: 'list-1',
            title: 'TITLE acts weird',
            cards,
        },
    },
    listIds:['list-1'],
};

export default data;