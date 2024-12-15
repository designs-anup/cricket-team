const requestURL = "https://designs-anup.github.io/cricket-team/indian-cricket-team.json"

const xhr = new XMLHttpRequest()
xhr.open('GET', requestURL)
// console.log(xhr.readyState);
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText)

        let card = ''

        for (let i = 0; i < data.length; i++) {

            let bowlingStyle = (data[i]['Bowling-style']) ? data[i]['Bowling-style'] : '-';
            let forms = (data[i]['Forms']) ? data[i]['Forms'] : '-';    

            card += `<li class='playerCard'>
                        <ul class='playerDetails'>
                            <li class="playerAvatar"><i class="fa fa-user" style="font-size:36px"></i></li>
                            <li class="playerName">${data[i]['Name']}</li>
                            <li class="battingStyle">${data[i]['Batting-style']}</li>
                            <li class="bowlingStyle">${bowlingStyle}</li>
                            <li class="DomesticTeam">${data[i]['Domestic-team']}</li>
                            <li class="IPLTeam">${data[i]['IPL-Team']}</li>
                            <li class="Forms">
                                <ul>
                                    <li>${forms}</li>
                                </ul>
                            </li>
                        </ul>
                    </li>`
        }

        document.querySelector('#team-list').innerHTML = card;
    }
}
xhr.send()
