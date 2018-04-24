function	schema() {
	return (`
		CREATE DATABASE IF NOT EXISTS Sneakerlife;
		USE Sneakerlife;
		
		CREATE TABLE IF NOT EXISTS User (
			id INT NOT NULL AUTO_INCREMENT,
			email VARCHAR(255) NOT NULL,
			firstName VARCHAR(255) NOT NULL,
			lastName VARCHAR(255) NOT NULL,
			password VARCHAR(255) NOT NULL,
			PRIMARY KEY (id)
		);
	`);
}	

export default schema;