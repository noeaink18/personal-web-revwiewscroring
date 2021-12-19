// let name1 = 'asyibi'
// let name2 = 'ojan'
// let name3 = 'yonda'
// let name4 = 'herda'

// let names = ['asyibi','ojan','yonda','herda']

// console.log(names)

//
// let dataOrang1 = {
//     name: 'asyibi',
//     alamat: 'Bogor',
//     email: 'asyibi@gmail.com',
//     'golongan darah' : 'o'
// };

// let dataOrang2= {
//     name: 'Lala',
//     alamat: 'Leuwiliang',
//     email: 'lala@gmail.com',
// };
// console.log(dataOrang1['golongan darah'])
// console.log(dataOrang2.alamat)

//Array Of Object

// let allData= [ {
//     nama:'asyibi',
//     alamat:'Bogor',
// },
// {
//     nama:'lala',
//     alamat:'Leuwiliang',
// },
//     dataOrang1
//  ]

// console.log(allData)
let blogs = []
function addBlog(event) {
    event.preventDefault()

    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value
    let image = document.getElementById('input-blog-image').files

    
    image = URL.createObjectURL(image[0])

    let blog={
    title: title,
    content: content,
    image: image,
    author: 'Asyibi Tri Wibowo',
    postAt : new Date()
    
    

    }

    blogs.push(blog)
    alert('data  sukses')
    // console.log(blogs)


    renderBlog()
}

function renderBlog(){
    let contentContainer = document.getElementById('contents');
    contentContainer.innerHTML =''
    for(let i = 0; i < blogs.length; i++){
        contentContainer.innerHTML += ` <div class="blog-list-item">
          <div class="blog-image">
            <img src="${blogs[i].image}" alt="" />
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Post Blog</button>
            </div>
            <h1>
              <a href="blog-detail.html" target="_blank"
                >${blogs[i].title}</a
              >
            </h1>
            <div class="detail-blog-content">
             ${getFullTime(blogs[i].postAt)} | ${blogs[i].author}
            </div>
            <p>${blogs[i].content} </p>
             <div style="text-align : right; font-size : 15px; color:grey; ">
              ${getDistanceTime(blogs[i].postAt)}
            </div>
          </div>
        </div>`
    }
}

let month = [
  'januari',
  'februari',
  'maret',
  'april',
  'mei',
  'juni',
  'juli',
  'agustus',
  'september',
  'oktober',
  'november',
  'desember',
]
  function getFullTime(time) {
    
    let date = time.getDate()
    let monthIndex =time.getMonth()
    let year = time.getFullYear()

    let hours = time.getHours()
    let minutes = time.getMinutes()

    let result = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB `
    
    return result
    // console.log(date)
    // console.log(monthIndex)
}

function getDistanceTime(time) {
  let timePost = time
  let timeNow = new Date()

  let distance = timeNow - timePost

  let miliseconds = 1000;
  let secondsInMinutes = 60;
  let minutesInHours = 60;
  let hoursInDay = 23;

  let distanceDay = Math.floor (distance / (miliseconds * secondsInMinutes * minutesInHours * hoursInDay))
  
if (distanceDay >=1) {
    return `${distanceDay} Day ago`

}else{
  let distanceHours = Math.floor (distance /(miliseconds * secondsInMinutes * minutesInHours))
  if (distanceHours >=1) {
  return `${distanceHours} Hours ago`
}else{

  let distanceMinutes = Math.floor (distance /(miliseconds * secondsInMinutes ))
  if (distanceMinutes >=1) {
  return `${distanceMinutes} Minutes ago`
}else{
   let distanceSeconds = Math.floor (distance /(miliseconds ))
  return `${distanceSeconds} Seconds ago`
  }
  }
  }
}
// getDistanceTime()
setInterval(() => {
  renderBlog()
}, 1000);
