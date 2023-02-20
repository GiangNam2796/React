function formatName(xxx){
    return xxx.firstname + '' + xxx.lastname;
}
const user = {
    firstname: 'Nam',
    lastname: 'Giang'
};
const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

export default formatName;


// arr/obj 
// map 
// localStorage 
// json

