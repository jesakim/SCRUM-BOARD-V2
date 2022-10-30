
function editdel(id){
    document.getElementById('task-save-btn').style.display = 'none';
    document.getElementById('task-id').value = id;
    document.getElementById('task-delete-btn').style.display = 'block';
    document.getElementById('task-update-btn').style.display = 'block';
    document.getElementById('task-title').value = document.getElementById("title"+id).getAttribute('data');
    document.getElementById('task-date').value = document.getElementById("time"+id).getAttribute('data');
    document.getElementById('task-description').value = document.getElementById("description"+id).getAttribute('title');
    document.getElementById('task-status').value = document.getElementById("priority"+id).getAttribute('status');
    document.getElementById('task-priority').value = document.getElementById("priority"+id).getAttribute('data');
    if(document.getElementById("type"+id).getAttribute('data')==1){document.getElementById('task-type-feature').checked = true}else{document.getElementById('task-type-bug').checked = true}
}
function addbtn(){
    document.getElementById('form-task').reset();
    document.getElementById('task-save-btn').style.display = 'block';
    document.getElementById('task-delete-btn').style.display = 'none';
    document.getElementById('task-update-btn').style.display = 'none';
}


