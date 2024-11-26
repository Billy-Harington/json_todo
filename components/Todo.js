

export function Todo(item) {
    const div = document.createElement('div')
    const left = document.createElement('div')
    const title = document.createElement('span')
    const time = document.createElement('span')
    const del = document.createElement('button')
    const img = document.createElement('img')

    div.classList.add('todo')
    left.classList.add("left")
    title.classList.add('title')
    time.classList.add('time')

    img.src = "./public/icons/close.svg"
    img.alt = "del"

    title.innerHTML = item.title
    time.innerHTML = ` Users id is ${item.id}`
    title.style.textDecoration = item.status ? "line-through 1px red" : ""


    div.append(left, del)
    left.append(title, time)
    del.append(img)

    del.onclick = async () => {
        if (confirm(`Are u sure?`)) {

            const res = await fetch("http://localhost:2020/todos/"+ item.id,{ method:"delete" })
            if (!res.ok) {
                alert("Bro something went wrong please try again")
            }
            div.remove()
        }
    }




    return div
}

