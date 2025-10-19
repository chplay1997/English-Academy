import DirectionBar from '../DirectionBar'
import ProgressBar from '../ProgressBar'

export default function ToeicFoundation() {
  return (
    <>
      <ProgressBar />
      <main className="md:px-[66px] md:py-[66] p">
        <div className="fixed z-2 w-[77%] top-[66px] left-[0] bottom-[50px] overflow-y-auto">
          <div className="w-full relative bg-black px-[8.5%]">
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe
                src="https://player.vimeo.com/video/1127909107?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="1"
              />
              <script src="https://player.vimeo.com/api/player.js" />
            </div>
          </div>

          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea voluptate eaque optio dolores tempora iusto
            soluta, voluptatem eum hic vel tempore doloribus culpa excepturi quaerat maiores nesciunt, nobis modi
            laboriosam.
          </div>
        </div>

        <div className="fixed z-2 w-[23%] top-[66px] right-[0] bottom-[50px] overflow-y-auto">
          <div className="p-4">
            <h2 className="text-2xl font-bold">List TOEIC FOUNDATION</h2>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-bold">List TOEIC FOUNDATION</h2>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-bold">List TOEIC FOUNDATION</h2>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-bold">List TOEIC FOUNDATION</h2>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-bold">List TOEIC FOUNDATION</h2>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-bold">List TOEIC FOUNDATION</h2>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-bold">List TOEIC FOUNDATION</h2>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-bold">List TOEIC FOUNDATION</h2>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-bold">List TOEIC FOUNDATION</h2>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-bold">List TOEIC FOUNDATION</h2>
          </div>
        </div>
      </main>
      <DirectionBar />
    </>
  )
}
