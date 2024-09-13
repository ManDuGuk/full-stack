const baseUrl = `/api/tours`;
async function getTourInfo() {
    const areaCode = document.getElementById('areaCode').value;
  //  alert(areaCode)
    const url = `${baseUrl}/area?areaCode=${areaCode}`;
    console.log(url);
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('데이터를 불러오는 데 실패했습니다.');

        const data = await response.json();
        //alert(JSON.stringify(data))
        displayResults(areaCode, data);
    } catch (error) {
        document.getElementById('results').innerText = '오류: ' + error.message;
    }
}//-----------------------------
function displayResults(areaCode, items) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // 기존 결과 초기화

    if (!items) {
        resultsDiv.innerText = '검색 결과가 없습니다.';
        return;
    }

    items.forEach((item) => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <a href="#" onclick=getDetailInfo('${item.title}','${item.firstimage}','${item.contentid}','${
            item.contenttypeid
        }')>
            <img src="${item.firstimage2}" alt="${
            item.title
        } 이미지" onerror="this.style.display='none'"></a>
        <div>
            <a href="#" onclick=getDetailInfo('${item.title}','${item.firstimage}','${item.contentid}','${
            item.contenttypeid
        }')><h3>${item.title}</h3></a>
            <p>주소: [${item.zipcode} ] ${item.addr1} ${item.addr2 ? ', ' + item.addr2 : ''}</p>
            <p>${item.tel ? 'Tel: ' + item.tel : ''}</p>

            <p>콘텐츠 ID: ${item.contentid}/ ID Type: ${item.contenttypeid}</p>
        </div>
    `;
        resultsDiv.appendChild(div);
    });
}//------------------------------
async function getDetailInfo(title, firstimage, contentid, contenttypeid) {
    // alert(contentid+'/'+contenttypeid);
    const url = `${baseUrl}/detail?contentId=${contentid}&contentTypeId=${contenttypeid}`;
    console.log(url);
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('데이터를 불러오는 데 실패했습니다.');

        const data = await response.json();
        console.log(data);

        displayDetailResults(data, title, firstimage);
    } catch (error) {
        document.getElementById('results').innerText = '오류: ' + error.message;
    }
} //--------------------------------
function displayDetailResults(items, title, firstimage) {
    //alert(firstimage.length);

    const modalContent = document.getElementById('modalContent');
    const imgDiv = document.getElementById('imgDiv');
    if (firstimage) {
        imgDiv.innerHTML = '';
        //이미지가 있을 경우 id가 'imgDiv' 인 곳에 이미지를 넣자
        // <img id="modalImage" class="modal-image" src="" alt="이미지" />
        const modalImage = document.createElement('img');
        modalImage.setAttribute('id', 'modalImage');
        modalImage.setAttribute('alt', title);
        modalImage.classList.add('modal-image');
        modalImage.src = firstimage;
        imgDiv.appendChild(modalImage);
    } // 모달에 이미지를 표시
    else {
        imgDiv.innerHTML = '';
    }

    modalContent.innerHTML = ''; // 기존 상세 정보 초기화

    if (!items || items.length === 0) {
        modalContent.innerText = '상세 정보가 없습니다.';
        openModal();
        return;
    }
    const titleDiv = document.createElement('div');
    modalContent.appendChild(titleDiv);
    titleDiv.innerHTML = `<h2>${title}</h2>`;
    items.forEach((item) => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
        
        <h3>${item.infoname}</h3>
        <p>${item.infotext}</p>
    `;
        modalContent.appendChild(itemDiv);
    });

    openModal();
}

function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// 모달 외부 클릭 시 닫기
window.onclick = function (event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        closeModal();
    }
};

window.getTourInfo=getTourInfo;
window.getDetailInfo=getDetailInfo
window.closeModal=closeModal