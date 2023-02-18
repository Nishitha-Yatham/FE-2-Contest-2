let arr=[];
function books(event){
    event.preventDefault();
    const bname=document.getElementById('bookname').value;
    const issue=document.getElementById('issuedto').value;
    const time=new Date();
    const id=arr.length+1;
    const status="not returned";

arr.push({
    ID:id,
    bookName:bname,
    Issued:issue,
    IssueTime:time,
    bStatus:status,
})

addData();
}
 function addData(){
    const Body=document.getElementById('Book-list');
    Body.innerText="";
    arr.forEach((book) => {
        const row=document.createElement("tr");
        row.innerHTML=`  
                       <td>${book.ID}</td>
                       <td>${book.bookName}</td>
                       <td>${book.Issued}</td>
                       <td>${book.IssueTime}</td>
                       <td>${book.bStatus}</td>
                       `;
        Body.appendChild(row);
    });
 }
