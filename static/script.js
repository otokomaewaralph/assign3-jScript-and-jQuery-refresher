$(function () {

var isValid=[];

function onFormSubmit(event){
	var data= $(event.target).serializeArray();
	var student={}
	for (var i=0; i< data.length; i++){
		student[data[i].name] = data[i].value;
	}

	//validating the input if already existed
	var list_element= $('<li>');
	list_element.html(student.first_name + ' ' + student.last_name+ ' - ' + student.age + '   ' + ' <input id=remove type=button value=Remove> ');
	if(isValid.indexOf(student.first_name + ' ' + student.last_name) === -1) {
		
		//prepend in DOM
		$('.student-list').prepend(list_element);
		isValid.push(student.first_name + ' ' + student.last_name);
	}
	else {
		alert("Name already in used. Insert new name of student");
}
	//clear all field after creating a student
        $('.create-form').trigger("reset");
	return false;
}

$('.create-form').submit(onFormSubmit);

//function to remove a student's information
function removeInfo(event){
  $(this).parent().remove();
}

$(document).on( "click", "#remove", removeInfo);


});