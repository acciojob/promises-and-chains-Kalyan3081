document.getElementById("form").addEventListener('submit', function (e) {
            e.preventDefault();
        })
        const ageinput = document.getElementById('age').value
        const nameinput = document.getElementById('name').value

        if (ageinput === "" || nameinput === "") {
            alert("Please fill in the form");
        }
        return;

        new Promise(function (resolve, reject) {
            setTimeout(() => {
                if (ageinput < 18) {
                    resolve();
                } else {
                    reject();
                }
            }, 4000)
        })
            .then(function () {
                console.log(`Welcome, ${nameinput}. You can vote`);
            })
            .catch(function () {
                console.log(`Oh sorry ${nameinput}. You aren't old enough.`)
            })