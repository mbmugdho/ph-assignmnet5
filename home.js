// heart increase functionality

let heart = document.getElementById('heart-count')
let heartBtn = document.getElementsByClassName('heart-btn')

for (let i = 0; i < heartBtn.length; i++) {
  heartBtn[i].addEventListener('click', function () {
    let currentHeartCount = parseInt(heart.innerText)
    heart.innerText = currentHeartCount + 1
  })
}

// Call button functionality with coin deduction and call history
let coins = 100
let callButtons = document.getElementsByClassName('call-btn')

for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener('click', function () {
    let card = this.parentNode.parentNode
    let name = card.getElementsByTagName('h3')[0].innerText
    let number = card.getElementsByTagName('span')[0].innerText

    if (coins < 20) {
      alert('Not enough coins to call emergency number.')
      return
    }

    coins = coins - 20
    document.getElementById('coin-count').innerText = coins

    alert('Calling ' + name + ' at ' + number)

    let callHistory = document.getElementById('call-history-list')
    let newItem = document.createElement('li')
    newItem.innerText = `Called ${name} (${number})`
    callHistory.appendChild(newItem)

    let time = new Date()
    let timeString = time.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })

    newItem.innerHTML = `
      <div class="flex justify-between items-center shadow bg-gray-100/80 rounded-xl mb-2 px-2 py-2">
        <div>
        <p class="font-bold">${name}</p>
        <p class="text-sm text-gray-500">${number}</p>
        </div>
        <span class="text-xs text-gray-400">${timeString}</span>
      </div>
    `
    callHistory.appendChild(newItem)

    let clearBtn = document.getElementById('clear-call-history')
    let historyList = document.getElementById('call-history-list')

    clearBtn.addEventListener('click', function () {
      historyList.innerHTML = ''
    })
  })
}

// copy button functionality

let copyCount = 0
let copyButtons = document.getElementsByClassName('copy-btn')

for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener('click', function () {
    let card = this.parentNode.parentNode
    let number = card.getElementsByTagName('span')[0].innerText
    navigator.clipboard.writeText(number).then(() => {
      alert('Copied to clipboard: ' + number)
      copyCount++
      document.getElementById('copy-count').innerText = copyCount
    })
  })
}
