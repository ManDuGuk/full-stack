//임시로 설정한 자료
const carList = [
    { id: 1, name: 'GRANDEUR', price: 3000, company: 'HYUNDAI', year: 2022 },
    { id: 2, name: 'SONATA', price: 2000, company: 'HYUNDAI', year: 2021 }
];
let seqId = 103;

//class ProductDao { }
//module.exports = new ProductDao();
// 어차피 한번만 사용하는 객체라면 객체리터럴 사용

// 데이터 연산처리후 객체로 리턴 --> 이후 컨트롤러에서 제이슨으로 변환처리됨
const ProductDAO = {
    findAll: () => {
        return [...carList];
    },
    findById: (id) => {
        const idx = carList.findIndex((car) => {
            return car.id === Number(id);
        });
        console.log("id of dao:", idx);
        if (idx !== -1) {
            return carList[idx];
        }
        return {};
    },
    create: (dto) => {
        // dto 이미 새로만들 객체가 구성되어 넘어옴
        dto.id = seqId++;
        carList.push(dto);
        return [...carList];
    },
    update: (id, dto) => {
        // 관련 id랑 바꿀 객체가 구성되어 넘어옴
        const idx = carList.findIndex((car) => {
            // === 연산자는 타입까지 동일 해야 한다.
            return car.id === Number(id);
        });
        if (idx !== -1) {
            carList[idx] = dto;
        }
        return [...carList];
    },
    delete: (id) => {
        const idx = carList.findIndex((car) => {
            return car.id === Number(id);
        });
        if (idx !== -1) {
            carList.splice(idx, 1);
        }
        return [...carList];
    }
};

module.exports = ProductDAO