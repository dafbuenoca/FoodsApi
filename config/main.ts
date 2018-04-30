const config = {

    // port 
    port: process.env.PORT || 3000,
    
    // database
    db: 'mongodb://localhost/foods-database',

    // test enviroment
    test_env: 'test',
    test_db: 'mongodb://localhost/foods-database-test',
    test_port: 3001

};

export default config;