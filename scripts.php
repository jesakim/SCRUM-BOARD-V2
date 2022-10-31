<?php
    //INCLUDE DATABASE FILE
    include('database.php');
    //SESSSION IS A WAY TO STORE DATA TO BE USED ACROSS MULTIPLE PAGES
    session_start();

    //ROUTING
    if(isset($_POST['save']))           saveTask();
    if(isset($_POST['delete']))         deleteTask();
    if(isset($_POST['update']))         updateTask();
 
   

   

    function getTasks($tstatus)
    {
        include('database.php');
        //CODE HERE
        
        $sql = "SELECT tasks.id, tasks.title, tasks.task_datetime, tasks.description,status_id,priority_id,type_id,
        types.name as ttype,
        priorities.name as tpriority,
        statuses.name as tstatus 
        FROM tasks                    
        INNER JOIN types on tasks.type_id = types.id                     
        INNER JOIN priorities on tasks.priority_id = priorities.id                     
        INNER JOIN statuses on tasks.status_id = statuses.id";
        $query=mysqli_query($con,$sql);
        
        while($row=mysqli_fetch_assoc($query)){
        //SQL SELECT
        if($tstatus == 1){$icon = "fa-regular fa-circle-question ";$color="danger";};
        if($tstatus == 2){$icon = "fas fa-circle-notch fa-spin";$color="warning";};
        if($tstatus == 3){$icon = "fa-regular fa-circle-check";$color="green";};
        if($row['status_id'] == $tstatus){
            $id = $row['id'];
            echo '<button class="bg-transparent w-100 border-0 border-bottom d-flex text-start pb-3" data-bs-toggle="modal" href="#modal-task" onclick="editdel('.$id.')">
            <div class="col-1 fs-3 text-'.$color.' me-10px">
                <i class="'.$icon.'"></i>
            </div>
            <div class="col-11">
                <div class="fs-4" id="title'.$id.'" data="'.$row['title'].'">'.$row['title'].'</div>
                <div class="">
                    <div class="text-gray" id="time'.$id.'" data="'.$row['task_datetime'].'">#'.$row['id'].' created in '.$row['task_datetime'].'</div>
                    <div class="fs-5 mb-10px" id="description'.$id.'" title="'.$row['description'].'">'.$row['description'].'</div>
                </div>
                <div class="w-300px">
                    <span class="bg-blue-600 text-white  fs-5 rounded-2 px-15px py-5px " status="'.$row['status_id'].'" id="priority'.$id.'" data="'.$row['priority_id'].'" >'.$row['tpriority'].'</span>
                    <span class="bg-gray-300 text-black m-2 fs-5 rounded-2 px-15px py-5px" id="type'.$id.'" data="'.$row['type_id'].'">'.$row['ttype'].'</span>
                </div>
            </div>
            </button>';
            
        }
        }
       
    }
    function getCount($status){
        include('database.php');
        $request ="select count(status_id) from tasks where status_id =$status";
        $count=mysqli_query($con,$request);
        $result = mysqli_fetch_column($count);
        return $result;
   }


    function saveTask()
    {
        include('database.php');
        //CODE HERE
        $title = htmlspecialchars($_POST['task-title']);
        $type = $_POST['task-type'];
        $priority = $_POST['task-priority'];
        $status = $_POST['task-status'];
        $date = $_POST['task-date'];
        $description = htmlspecialchars($_POST['task-description']);
        if(empty($date)){
            $date = gmdate("Y-m-d", time());
        }
        if (!empty($title) && !empty($description)) {
            //SQL INSERT
            $sql = "INSERT INTO `tasks`(`title`, `type_id`, `priority_id`, `status_id`, `task_datetime`, `description`) 
            VALUES ('$title','$type','$priority','$status','$date','$description')";
            mysqli_query($con, $sql);
            $_SESSION['message'] = "Task has been added successfully !";
            header('location: index.php');
          }else{
            $_SESSION['message1'] = "All inputs are requared !";
            header('location: index.php');
          }

        
    }

    function updateTask()
    {
        include('database.php');
        //CODE HERE
        $idupdate = $_POST["task-id"]; 
        $title = htmlspecialchars($_POST['task-title']);
        $type = $_POST['task-type'];
        $priority = $_POST['task-priority'];
        $status = $_POST['task-status'];
        $date = $_POST['task-date'];
        $description = htmlspecialchars($_POST['task-description']);
        //SQL UPDATE
        if(empty($date)){
            $date = gmdate("Y-m-d", time());
        }
        if (!empty($title) && !empty($description)) {
            //SQL INSERT
            $usql ="UPDATE `tasks` SET `title`='$title',`type_id`='$type',`priority_id`='$priority',`status_id`='$status',`task_datetime`='$date',`description`='$description' WHERE id=$idupdate";
            $res = mysqli_query($con, $usql);
            if($res){$_SESSION['message'] = "Task has been updated successfully !";
                header('location: index.php');}
          }else{
            $_SESSION['message1'] = "All inputs are requared !";
            header('location: index.php');
          }
        
    }

    function deleteTask()
    {
        //CODE HERE
        include('database.php');
        $iddelete = $_POST["task-id"];
       
        //SQL DELETE
        $usql = "DELETE FROM  tasks WHERE id=$iddelete";
        $resultDelet=mysqli_query($con, $usql);
        if($resultDelet){
        $_SESSION['message'] = "Task has been deleted successfully !";
		header('location: index.php');
         }

    }
?>