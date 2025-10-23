// components/Footer.tsx
import { Facebook, Youtube, Music } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300 py-10 px-6 md:px-20">
      <div className="grid md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* Cột 1 */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-[#f05123] text-white font-bold text-lg px-3 py-1 rounded-md">EA</div>
            <span className="font-semibold text-white">English Academy</span>
          </div>
          <p>
            <strong>Điện thoại:</strong> 0999 999 999
          </p>
          <p>
            <strong>Email:</strong> hoangdam802@gmail.com
          </p>
          <p>
            <strong>Địa chỉ:</strong> Nam Từ Liêm, Hà Nội
          </p>
        </div>

        {/* Cột 2 */}
        <div>
          <h3 className="text-white font-semibold mb-3">Về English Academy</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Giới thiệu
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Liên hệ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Điều khoản
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Bảo mật
              </a>
            </li>
          </ul>
        </div>

        {/* Cột 3 */}
        <div>
          <h3 className="text-white font-semibold mb-3">SẢN PHẨM</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Chưa có
              </a>
            </li>
          </ul>
        </div>

        {/* Cột 4 */}
        <div>
          <h3 className="text-white font-semibold mb-3">CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC English Academy</h3>
          <p>
            <strong>Mã số thuế:</strong> 0999 999 999
          </p>
          <p>
            <strong>Ngày thành lập:</strong> 20/10/2010
          </p>
          <p className="mt-2">
            <strong>Lĩnh vực hoạt động:</strong> Giáo dục. Chúng tôi tập trung xây dựng và phát triển các sản phẩm mang
            lại giá trị cho cộng đồng viên Việt Nam.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="bg-red-600 p-2 rounded-lg text-white">
              <Youtube size={18} />
            </a>
            <a href="#" className="bg-blue-600 p-2 rounded-lg text-white">
              <Facebook size={18} />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-lg text-white">
              <Music size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-6">
        © 2018 – 2025 EA. Nền tảng học tiếng Anh hàng đầu Việt Nam
      </div>
    </footer>
  )
}
