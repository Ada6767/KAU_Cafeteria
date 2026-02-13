// js/auth.js
const Auth = {
    // Customer authentication
    customer: {
        register: function(email, password, name) {
            const existingUser = DB.users.findByEmail(email);
            if (existingUser) {
                return { success: false, message: 'Email already registered' };
            }
            
            // Check if the user is a student (has @stu.kau.edu.sa email)
            const isStudent = email.toLowerCase().endsWith('@stu.kau.edu.sa');
            
            const newUser = DB.users.create({
                email,
                password, // In a real app, this would be hashed
                name,
                isStudent,
                balance: 0
            });
            
            return { 
                success: true, 
                user: { ...newUser, password: undefined } // Remove password from returned object
            };
        },
        
        login: function(email, password) {
            const user = DB.users.findByEmail(email);
            if (!user || user.password !== password) {
                return { success: false, message: 'Invalid email or password' };
            }
            
            // Set current user in session storage
            sessionStorage.setItem('currentUser', JSON.stringify({
                ...user,
                password: undefined // Remove password from stored object
            }));
            
            return { 
                success: true, 
                user: { ...user, password: undefined } 
            };
        },
        
        logout: function() {
            sessionStorage.removeItem('currentUser');
            return { success: true };
        },
        
        getCurrentUser: function() {
            const userData = sessionStorage.getItem('currentUser');
            return userData ? JSON.parse(userData) : null;
        }
    },
    
    // Worker authentication
    worker: {
        login: function(email, password) {
            const worker = DB.workers.findByEmail(email);
            if (!worker || worker.password !== password) {
                return { success: false, message: 'Invalid email or password' };
            }
            
            // Set current worker in session storage
            sessionStorage.setItem('currentWorker', JSON.stringify({
                ...worker,
                password: undefined // Remove password from stored object
            }));
            
            return { 
                success: true, 
                worker: { ...worker, password: undefined } 
            };
        },
        
        logout: function() {
            sessionStorage.removeItem('currentWorker');
            return { success: true };
        },
        
        getCurrentWorker: function() {
            const workerData = sessionStorage.getItem('currentWorker');
            return workerData ? JSON.parse(workerData) : null;
        }
    }
};