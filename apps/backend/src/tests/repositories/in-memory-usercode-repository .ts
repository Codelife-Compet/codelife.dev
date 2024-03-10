import { UserCodesRepository } from "@/domain/trilhas/user-codes/repositories/userCodesInterfaceRepository";
import { UserCode, UserCodeProps } from "@/domain/trilhas/@entities/userCode";
import { InMemorySlidesRepository } from "./in-memory-slides-repository ";

export class InMemoryUserCodesRepository implements UserCodesRepository {

    public items: UserCode[] = []

    constructor(private inMemorySlidesRepository: InMemorySlidesRepository) {}
    
    async create(data: UserCode): Promise<UserCode> {

        const usercode = new UserCode(data);
        this.items.push(usercode);

        const slides = await this.inMemorySlidesRepository.findById(data.slideId.toString())
        if (slides) {
            slides.userCodes?.push(data)
            this.inMemorySlidesRepository.save(slides)
        }

        return usercode;
    }

    async save(userCode: UserCode): Promise<UserCode> {

        const index = this.items.findIndex(item => item.id === userCode.id)

        this.items[index] = userCode

        return userCode
    }

    async findById(id: string): Promise<UserCode | null> {
        const usercode = this.items.find(usercode => usercode.id.toString() === id)

        return (usercode ? usercode : null)
    }

    async findUserCodeBySlideId(slideId: string): Promise<UserCode | null> {
        const usercode = this.items.find(usercode => usercode.slideId === slideId)

        return (usercode ? usercode : null)
    }

    async findByUserName(userName: string): Promise<UserCode | null> {
        const usercode = this.items.find(usercode => usercode.userName === userName)

        return (usercode ? usercode : null)
    }
}