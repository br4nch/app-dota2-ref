import { Injectable } from '@angular/core';
declare var window: any;
@Injectable()
export class SqlStorage {
    public text: string = "";
    public db = null;
    public arr = [];
    constructor() { }
    /**
     * 
     * Open The Datebase
     */
    openDb() {
        this.db = window
            .sqlitePlugin
            .openDatabase({ name: 'sms.db', location: 'default' });
        this
            .db
            .transaction((tx) => {
                tx.executeSql('CREATE TABLE IF NOT EXISTS sms (id integer primary key, address text, body text)');
            }, (e) => {
                console.log('Transtion Error', e);
            }, () => {
                console.log('Populated Datebase OK..');
            })
    }
    /**
     * 
     * @param addItem for adding: function
     */
    addItem(address, body) {
        return new Promise(resolve => {
            var InsertQuery = "INSERT INTO sms (address, body) VALUES (?, ?)";
            this
                .db
                .executeSql(InsertQuery, [address, body], (r) => {
                    console.log('Inserted... Sucess..', address + " " + body);
                    this
                        .getRows()
                        .then(s => {
                            resolve(true)
                        });
                }, e => {
                    console.log('Inserted Error', e);
                    resolve(false);
                })
        })
    }

    //Refresh everytime

    getRows() {
        return new Promise(res => {
            this.arr = [];
            let query = "SELECT * FROM sms";
            this
                .db
                .executeSql(query, [], rs => {
                    if (rs.rows.length > 0) {
                        for (var i = 0; i < rs.rows.length; i++) {
                            var item = rs
                                .rows
                                .item(i);
                            this
                                .arr
                                .push(item);
                        }
                    }
                    res(true);
                }, (e) => {
                    console.log('Sql Query Error', e);
                });
        })

    }
    //to delete any Item
    del() {
        return new Promise(resolve => {
            // var query = "DELETE FROM sms WHERE id=?";
            var query = "DELETE FROM sms WHERE id=?";
            this
                .db
                .executeSql(query, [], (s) => {
                    console.log('Delete Success...', s);
                    this
                        .getRows()
                        .then(s => {
                            resolve(true);
                        });
                }, (err) => {
                    console.log('Deleting Error', err);
                });
        })

    }
    //to Update any Item
    update(id, address) {
        return new Promise(res => {
            var query = "UPDATE sms SET address=?  WHERE id=?";
            this
                .db
                .executeSql(query, [
                    address, id
                ], (s) => {
                    console.log('Update Success...', s);
                    this
                        .getRows()
                        .then(s => {
                            res(true);
                        });
                }, (err) => {
                    console.log('Updating Error', err);
                });
        })

    }

}

