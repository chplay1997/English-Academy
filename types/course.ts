import { ILesson } from '@/models/lesson.model'
import { ISection } from '@/models/section.model'
import { ICourse } from '@/models/course.model'
import { IUserLessonNote } from '@/models/userLessonNote.model'
import { IUserLessonProgress } from '@/models/userLessonProgress.model'

type LessonBase = ILesson & { _id: string; updatedAt: string }
type SectionBase = Omit<ISection, 'lessons'> & { lessons: LessonBase[]; _id: string }
type CourseBase = Omit<ICourse, 'sections'> & { sections: SectionBase[]; _id: string }
export type UserLessonProgressBase = IUserLessonProgress & { _id: string }

export interface ICourseData extends Omit<CourseBase, 'sections'> {
  sections: (Omit<SectionBase, 'lessons'> & { lessons: LessonBase[]; duration: number })[]
  isEnrolled: boolean
  duration: number
  videoLessonsCount: number
  userLessonProgress: UserLessonProgressBase
  userLessonNote: IUserLessonNote[]
}
