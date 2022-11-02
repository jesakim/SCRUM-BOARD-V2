function delvalid(){
    document.getElementById('task-id1').value = document.getElementById('task-id').value
}
myTimeout = setTimeout(alertmsg, 5000);
function alertmsg(){
    document.getElementById('alertmsg').style.display = 'none'
}
function editdel(id){
    document.getElementById('ticonv').style.display = 'none';
    document.getElementById('ticoninv').style.display = 'none';
    document.getElementById('diconv').style.display = 'none';
    document.getElementById('diconinv').style.display = 'none';
    document.getElementById('Descriptionvalid').style.display = 'none';
    document.getElementById('titlevalid').style.display = 'none';
    document.getElementById('titleinvalid').style.display = 'none';
    document.getElementById('Descriptioninvalid').style.display = 'none';
    document.getElementById('task-update-btn').disabled = false;
    document.getElementById('task-title').style = 'none';
    document.getElementById('task-description').style = 'none';
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
    document.getElementById('task-save-btn').disabled = false;
    document.getElementById('form-task').reset();
    document.getElementById('task-save-btn').style.display = 'block';
    document.getElementById('task-delete-btn').style.display = 'none';
    document.getElementById('task-update-btn').style.display = 'none';
    document.getElementById('task-title').style = 'none';
    document.getElementById('task-description').style = 'none';
    document.getElementById('Descriptionvalid').style.display = 'none';
    document.getElementById('titlevalid').style.display = 'none';
    document.getElementById('titleinvalid').style.display = 'none';
    document.getElementById('Descriptioninvalid').style.display = 'none';
    document.getElementById('ticonv').style.display = 'none';
    document.getElementById('ticoninv').style.display = 'none';
    document.getElementById('diconv').style.display = 'none';
    document.getElementById('diconinv').style.display = 'none';
}
document.getElementById('task-title').oninvalid = function(){
    document.getElementById('task-title').style.border = '2px solid red';
    document.getElementById('task-title').style.boxShadow = '0px 0px 10px red';
    // document.getElementById('task-title').setCustomValidity('Enter Task Title');
    document.getElementById('task-save-btn').disabled = true;
    document.getElementById('task-update-btn').disabled = true;
    document.getElementById('titlevalid').style.display = 'none';
    document.getElementById('titleinvalid').style.display = 'block';
    document.getElementById('ticonv').style.display = 'block';
    document.getElementById('ticoninv').style.display = 'none';
};
document.getElementById('task-description').oninvalid = function(){
    document.getElementById('task-description').style.border = '2px solid red';
    document.getElementById('task-description').style.boxShadow = '0px 0px 10px red';
    document.getElementById('task-description').setCustomValidity('Enter Task Description');
    document.getElementById('task-save-btn').disabled = true;
    document.getElementById('task-update-btn').disabled = true;
    document.getElementById('Descriptionvalid').style.display = 'none';
    document.getElementById('Descriptioninvalid').style.display = 'block';
    document.getElementById('diconv').style.display = 'block';
    document.getElementById('diconinv').style.display = 'none';
};
document.getElementById('task-description').oninput = function(){
        document.getElementById('task-save-btn').disabled = false;
        document.getElementById('task-update-btn').disabled = false;
    document.getElementById('task-description').style = 'none';
    document.getElementById('task-description').setCustomValidity('');
    document.getElementById('Descriptionvalid').style.display ='block';
    document.getElementById('Descriptioninvalid').style.display ='none';
    document.getElementById('diconv').style.display = 'none';
    document.getElementById('diconinv').style.display = 'block';
};
document.getElementById('task-title').oninput = function(){
    document.getElementById('task-title').style = 'none';
    document.getElementById('task-title').setCustomValidity('');
        document.getElementById('task-save-btn').disabled = false;
        document.getElementById('task-update-btn').disabled = false;
    document.getElementById('titlevalid').style.display = 'block';
    document.getElementById('titleinvalid').style.display = 'none';
    document.getElementById('ticonv').style.display = 'none';
    document.getElementById('ticoninv').style.display = 'block';
};
function valid(){
    document.getElementById('task-description').setCustomValidity('');
    document.getElementById('task-title').setCustomValidity('');
}
