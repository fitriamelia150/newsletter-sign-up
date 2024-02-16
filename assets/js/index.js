const container = document.querySelector('.container');
const container_success = document.querySelector('.container-success');
const btn_subscribe = document.querySelector('.btn-subscribe');
const input_email = document.querySelector('#email');
const info_error = document.querySelector('.info-error');
const btn_close	= document.querySelector('.btn-close');

btn_subscribe.addEventListener('click', ()=>{
	if(input_email.value === ''){
		error_email('e');
	}else{
		container.classList.remove('show');
		container.classList.add('hide');
		container_success.classList.remove('hide');
		container_success.classList.add('show');


		const popup_span_email = document.querySelector('.email');
		popup_span_email.innerHTML = input_email.value;

	}
		
})

btn_close.addEventListener('click', ()=>{
	container_success.classList.remove('show');
	container_success.classList.add('hide');
	container.classList.remove('hide');
})

input_email.addEventListener('input', (res)=>{
	let values_email = res.target.value.trim();

	if(values_email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
		error_email();
	}else{
		error_email('e');
	}

	
})

function error_email (info){
	if(info === 'e'){
		input_email.classList.add('invalid-email');
		info_error.classList.remove('hide');
		info_error.classList.add('show');
	}else{
		input_email.classList.remove('invalid-email');
		info_error.classList.remove('show');
		info_error.classList.add('hide');
	}
	
}
