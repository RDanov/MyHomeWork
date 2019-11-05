const ATM = {
        isAuth: false,
        currentUser: {},
        logs: [],
        // all cash available in ATM
        cash: 2000,
        // all available users
        users: [
            {id: "0000", pin: "000", debet: 0, type: "admin"}, // EXTENDED
            {id: "0025", pin: "123", debet: 675, type: "user"}
        ],
        // authorization
        auth(id, pin) {
            for (let i = 0; i < this.users.length; i++) {
                if (id === this.users[i].id) {
                    if (pin === this.users[i].pin) {
                        this.isAuth = true;
                        this.currentUser = this.users[i];
                        console.log('Autorization is complete');
                        this.logs.push(this.currentUser.id + 'logged in');
                        break
                    } else console.log('invalid pin');
                }
            }
        },
        // check current debet
        check() {
            if (this.auth()) {
                console.log(this.currentUser.debet);
                this.logs.push(this.currentUser.id + 'checked account status');
                return
            } else console.log('authorization required');
        },
        // get cash - available for user only
        getCash(amount) {
            if (this.auth()) {
                if (amount > this.cash) {
                    console.log('Sorry! not enough money at the ATM');
                    this.logs.push(this.currentUser.id + 'not enough money at the ATM')
                } else if (amount <= this.currentUser.debet) {
                    console.log('take the money after the card is returned');
                    this.logs.push(this.currentUser.id + 'got' + amount);
                    this.currentUser.debet -= amount;
                    this.cash -= amount;
                } else {
                    console.log('insufficient funds in the account');
                    this.logs.push(this.currentUser.id + 'insufficient funds in the account');
                }
            } else console.log('authorization required');


        },
        // load cash - available for user only
        loadCash(amount) {
            if (this.auth()) {
                this.currentUser.debet += amount;
                this.cash += amount;
                console.log('account credited to' + amount);
                this.logs.push(this.currentUser.id + 'account credited to' + amount);
            } else console.log('authorization required');

        },
        // load cash to ATM - available for admin only - EXTENDED
        loadAtmCash(amount) {
            if (this.auth()) {
                if (this.currentUser.type === "admin") {
                    this.cash += amount;
                    console.log('ATM account credited to' + amount);
                    this.logs.push(this.currentUser.id + 'ATM account credited to' + amount)
                } else console.log('Access is denied')
            } else console.log('authorization required');
        },
        // get cash actions logs - available for admin only - EXTENDED
        getLogs() {
            if (this.auth()) {
                if (this.currentUser.type === "admin") {
                    console.log("Saved logs: ");
                    for (let i = 0; i < this.logs.length; i++) {
                        console.log(this.logs[i]);
                    }
                } else console.log('Access is denied')
            } else console.log('authorization required');
        },

// log out
        logout
            () {
            this.isAuth = false;
            console.log('Do not forget to pick up a card. Good by');
            this.logs.push(this.currentUser.id + 'logout')
        }
    }
;