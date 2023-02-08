import { BadRequestError } from "../errors/BadRequestError"

export interface CreateCourseInputDTO {
    id: string,
    name: string,
    lessons: number
}

export class CourseDTO {
    public createCourseInput (
        id: unknown,
        name: unknown,
        lessons: unknown
    ): CreateCourseInputDTO {
        if (typeof id !== "string") {
            throw new BadRequestError("'id' deve ser string")
        }

        if (typeof name !== "string") {
            throw new BadRequestError("'name' deve ser string")
        }

        if (typeof lessons !== "number") {
            throw new BadRequestError("'lessons' deve ser number")
        }

        const dto: CreateCourseInputDTO = {
            id,
            name,
            lessons
        }

        return dto

    }

}