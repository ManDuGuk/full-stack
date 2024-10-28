const formData = new FormData()
const fileField = document.querySelector('input[type="file"]');

formData.append("username", "abc123");
formData.append('avarta', fileField.files[0])