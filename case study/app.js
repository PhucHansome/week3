var jobs = [
    "Làm các bài tập ở james",
    "thực hành các bài ở james",
    "học kỹ về james",
]

function renderJob(){
    let tbJob = document.querySelector('.table>tbody');
    let htmls = jobs.map(function(job, index){
        return `
                <tr>
                    <td>${index + 1}</td>
                    <td id='idJob${index}'>${job}</td>
                    <td>
                        <a href="#" onclick="doneJob(${index})" class="done">Done</a>
                        <a href="#" onclick="deleterow()" class="remove">Remove</a>
                      
                    </td>
                </tr>
                `
    })

    tbJob.innerHTML = htmls.join("");
}
renderJob();
function deleterow(index1){
    jobs.splice(index1, 1)
    renderJob();
}
renderJob()

function Creat(){
    let valueText = document.getElementById("jobname").value;
    jobs.unshift(valueText);    
    renderJob();
}
function doneJob(index){
        document.querySelector(`#idJob${index}`).style.textDecoration = "line-through"
}