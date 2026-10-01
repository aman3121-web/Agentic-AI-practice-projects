document.addEventListener('DOMContentLoaded', () => {
	const taskForm = document.getElementById('task-form');
	const newTaskInput = document.getElementById('new-task');
	const taskList = document.getElementById('task-list');

	taskForm.addEventListener('submit', (event) => {
		event.preventDefault();

		const taskText = newTaskInput.value.trim();
		if (!taskText) {
			newTaskInput.focus();
			return;
		}

		const taskItem = document.createElement('li');
		const taskLabel = document.createElement('span');
		taskLabel.textContent = taskText;

		const completeButton = document.createElement('button');
		completeButton.type = 'button';
		completeButton.textContent = 'Complete';
		completeButton.setAttribute('aria-pressed', 'false');
		completeButton.addEventListener('click', () => {
			const isComplete = taskItem.classList.toggle('completed');
			completeButton.setAttribute('aria-pressed', String(isComplete));
			completeButton.textContent = isComplete ? 'Undo' : 'Complete';
		});

		const removeButton = document.createElement('button');
		removeButton.type = 'button';
		removeButton.textContent = 'Remove';
		removeButton.addEventListener('click', () => taskItem.remove());

		const actions = document.createElement('div');
		actions.className = 'task-actions';
		actions.append(completeButton, removeButton);
		taskItem.append(taskLabel, actions);
		taskList.appendChild(taskItem);

		newTaskInput.value = '';
		newTaskInput.focus();
	});
});
