
// this
const object = {
    name:'ojg',
    main: function(){
        setTimeout(()=>{
            console.log(this);
        },1000);
    },
};
object.main();


// bind
const object2 = {
    name:'ojg',
    main: function(){
        const innerFunction = (()=>{
            console.log(this);
        }).bind({hi:'hi'});
        innerFunction();
    },
};
object.main();


