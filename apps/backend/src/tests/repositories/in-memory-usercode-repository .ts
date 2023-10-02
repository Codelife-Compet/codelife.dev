import { Slide } from "@/domain/trilhas/@entities/slide";
import { UserCodesRepository } from "@/domain/trilhas/user-codes/repositories/userCodesInterfaceRepository";
import { UserCode, UserCodeProps } from "@/domain/trilhas/@entities/userCode";
import { InMemorySlidesRepository } from "./in-memory-slides-repository ";

export class InMemoryUserCodesRepository implements UserCodesRepository {

    public items: UserCode[] = []

    constructor(private slidesRepository: InMemorySlidesRepository) {}
    
    async create(data: UserCodeProps): Promise<UserCode> {

        const usercode = new UserCode(data);
        this.items.push(usercode);

        const slide = await this.slidesRepository.findById(usercode.slideId)
        this.slidesRepository.items[this.slidesRepository.items.indexOf(slide as Slide)].userCodes?.push(usercode) 

        return usercode;
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