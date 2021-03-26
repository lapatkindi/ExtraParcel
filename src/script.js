
        import 'regenerator-runtime/runtime'
        const url = 'http://localhost:8000/records';
        const handler = async () => {
            console.log('LOAD!')
            let response = await fetch(url);

            if (response.ok) { // если HTTP-статус в диапазоне 200-299
                // получаем тело ответа (см. про этот метод ниже)
                let json = await response.json();
                console.log(json);
            } else {
                alert("Ошибка HTTP: " + response.status);
            }
        }
        document.getElementById('load').onclick = handler;
    