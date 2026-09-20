import "./App.css";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <header>
        <nav>
          <h2>A GLIMPSE INTO MY WORLD</h2>

          <ul>
            <li><a href="#beranda">Beranda</a></li>
            <li><a href="#tentang">Tentang Saya</a></li>
            <li><a href="#galeri">Galeri</a></li>
            <li><a href="#kontak">Kontak</a></li>
          </ul>
        </nav>
      </header>

      {/* BERANDA */}
      <main>
        <section id="beranda">
          <div>
            <h1>KAYLA HANIIFA IRLI</h1>

            <h2>Designer & Creative Person</h2>

            <p>
              Selamat datang di website portofolio saya.
              Di sini kamu bisa melihat karya, pengalaman,
              dan informasi tentang saya.
            </p>

            <p>
              <a href="#galeri">Lihat Portofolio</a>
            </p>
          </div>

          <div>
            <img
              src="/images/profile.jpeg.jpg"
              alt="Foto profil saya"
            />
          </div>
        </section>

        {/* TENTANG SAYA */}
        <section id="tentang">
          <header>
            <h1>Tentang Saya</h1>
            <h2>Kenali Saya Lebih Dekat</h2>
          </header>

          <div>
            <h3>Kayla Haniifa Irli 👋</h3>

            <p>
              Saya adalah seseorang yang memiliki ketertarikan
              terhadap dunia desain, ilustrasi, teknologi,
              dan kreativitas.
            </p>

            <h3>Data Diri</h3>

            <table>
              <thead>
                <tr>
                  <th>Informasi</th>
                  <th>Detail</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td><strong>Nama</strong></td>
                  <td>Kayla Haniifa Irli</td>
                </tr>

                <tr>
                  <td>
                    <strong>Tempat, Tanggal Lahir</strong>
                  </td>

                  <td>Bandung, 12-12-2006</td>
                </tr>
              </tbody>
            </table>

            <h3>Keahlian Saya</h3>

            <ul>
              <li>Ilustrasi</li>
              <li>C</li>
              <li>Design</li>
              <li>Blender</li>
            </ul>

            <h3>Pendidikan</h3>

            <p>S1 PENDIDIKAN ILMU KOMPUTER</p>
          </div>
        </section>

        {/* GALERI */}
        <section id="galeri">
          <header>
            <h1>Portofolio</h1>
            <h2>Galeri Karya</h2>
          </header>

          <div>
            <article>
              <h3>Project 01</h3>

              <img
                src="/images/draw4.png"
                alt="Poster"
              />

              <p>
                <strong>Desain Poster</strong>
              </p>
            </article>

            <article>
              <h3>Project 02</h3>

              <img
                src="/images/draw3.png"
                alt="3D Rendering"
              />

              <p>
                <strong>3D Rendering</strong>
              </p>
            </article>

            <article>
              <h3>Project 03</h3>

              <img
                src="/images/draw.jpg"
                alt="Ilustrasi"
              />

              <p>
                <strong>Ilustrasi</strong>
              </p>
            </article>

            <article>
              <h3>Project 04</h3>

              <img
                src="/images/draw7.png"
                alt="Website Design"
              />

              <p>
                <strong>Website Design</strong>
              </p>
            </article>

            <article>
              <h3>Project 05</h3>

              <img
                src="/images/draw6.jpeg"
                alt="Fotografi"
              />

              <p>
                <strong>Photography</strong>
              </p>
            </article>

            <article>
              <h3>Project 06</h3>

              <img
                src="/images/draw5.jpeg"
                alt="Character Design"
              />

              <p>
                <strong>Character Design</strong>
              </p>
            </article>
          </div>
        </section>

        {/* KONTAK */}
        <section id="kontak">
          <header>
            <h1>Kontak</h1>
            <h2>Hubungi Saya</h2>
          </header>

          <h3>Mari Berkomunikasi!</h3>

          <p>
            Jika kamu tertarik untuk bekerja sama,
            berdiskusi, atau sekadar ingin menyapa,
            silakan hubungi saya.
          </p>

          <table>
            <thead>
              <tr>
                <th>Informasi</th>
                <th>Detail</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><strong>Email</strong></td>
                <td>kaylahaniifa@gmail.com</td>
              </tr>

              <tr>
                <td><strong>Instagram</strong></td>
                <td>@kdghgz</td>
              </tr>

              <tr>
                <td><strong>Lokasi</strong></td>
                <td>Bandung, Indonesia</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <p>
          © 2026 Portofolio Kayla Haniifa Irli.
          All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default App;