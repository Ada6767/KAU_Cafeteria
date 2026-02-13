// js/database.js
const DB = {
    // Initialize database with default values
    init: function() {
        if (!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify([]));
        }
        if (!localStorage.getItem('tickets')) {
            localStorage.setItem('tickets', JSON.stringify([]));
        }
        if (!localStorage.getItem('workers')) {
            // Create default worker account if none exists
            const defaultWorkers = [
                {
                    id: 'worker1',
                    email: 'worker@restaurant.com',
                    password: 'worker123', // In a real app, this would be hashed
                    name: 'Restaurant Worker'
                }
            ];
            localStorage.setItem('workers', JSON.stringify(defaultWorkers));
        }
    },

    // User related methods
    users: {
        getAll: function() {
            return JSON.parse(localStorage.getItem('users')) || [];
        },
        
        findByEmail: function(email) {
            const users = this.getAll();
            return users.find(user => user.email.toLowerCase() === email.toLowerCase());
        },
        
        create: function(user) {
            const users = this.getAll();
            const newUser = {
                id: 'user_' + Date.now(),
                ...user,
                createdAt: new Date().toISOString()
            };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            return newUser;
        },
        
        update: function(id, updatedData) {
            const users = this.getAll();
            const index = users.findIndex(user => user.id === id);
            if (index !== -1) {
                users[index] = { ...users[index], ...updatedData };
                localStorage.setItem('users', JSON.stringify(users));
                return users[index];
            }
            return null;
        }
    },
    
    // Worker related methods
    workers: {
        getAll: function() {
            return JSON.parse(localStorage.getItem('workers')) || [];
        },
        
        findByEmail: function(email) {
            const workers = this.getAll();
            return workers.find(worker => worker.email.toLowerCase() === email.toLowerCase());
        }
    },
    
    // Ticket related methods
    tickets: {
        getAll: function() {
            return JSON.parse(localStorage.getItem('tickets')) || [];
        },
        
        getUserTickets: function(userId) {
            const tickets = this.getAll();
            return tickets.filter(ticket => ticket.userId === userId);
        },
        
        create: function(ticket) {
            const tickets = this.getAll();
            const newTicket = {
                id: 'ticket_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
                ...ticket,
                used: false,
                createdAt: new Date().toISOString()
            };
            tickets.push(newTicket);
            localStorage.setItem('tickets', JSON.stringify(tickets));
            return newTicket;
        },
        
        findById: function(id) {
            const tickets = this.getAll();
            return tickets.find(ticket => ticket.id === id);
        },
        
        markAsUsed: function(id) {
            const tickets = this.getAll();
            const index = tickets.findIndex(ticket => ticket.id === id);
            if (index !== -1) {
                tickets[index].used = true;
                tickets[index].usedAt = new Date().toISOString();
                localStorage.setItem('tickets', JSON.stringify(tickets));
                return tickets[index];
            }
            return null;
        }
    }
};

// Initialize database when the script loads
DB.init();