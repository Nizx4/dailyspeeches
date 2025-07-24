// Interactive category details logic for categories page

document.addEventListener('DOMContentLoaded', function () {
  const categories = {
    confidence: {
      name: 'Confidence',
      desc: 'Build self-assurance and speak boldly! These speeches help you practice standing tall, projecting your voice, and believing in yourself.',
      days: [
        { day: 'Day 2', link: 'day2.html' },
        { day: 'Day 9', link: 'day9.html' },
        { day: 'Day 24', link: 'day24.html' },
        { day: 'Day 26', link: 'day26.html' },
        { day: 'Day 31', link: 'day31.html' },
        { day: 'Day 34', link: 'day34.html' },
        { day: 'Day 39', link: 'day39.html' },
        { day: 'Day 41', link: 'day41.html' },
        { day: 'Day 44', link: 'day44.html' },
        { day: 'Day 47', link: 'day47.html' },
        { day: 'Day 55', link: 'day55.html' }
      ]
    },
    persuasion: {
      name: 'Persuasion',
      desc: 'Practice convincing an audience and making your case! These speeches teach you to use logic, emotion, and storytelling to inspire action.',
      days: [
        { day: 'Day 3', link: 'day3.html' },
        { day: 'Day 8', link: 'day8.html' },
        { day: 'Day 21', link: 'day21.html' },
        { day: 'Day 25', link: 'day25.html' }
      ]
    },
    clarity: {
      name: 'Clarity',
      desc: 'Sharpen your focus and speak with precision! These speeches help you organize your thoughts, use clear language, and get your message across.',
      days: [
        { day: 'Day 4', link: 'day4.html' },
        { day: 'Day 7', link: 'day7.html' },
        { day: 'Day 28', link: 'day28.html' },
        { day: 'Day 36', link: 'day36.html' },
        { day: 'Day 38', link: 'day38.html' },
        { day: 'Day 45', link: 'day45.html' },
        { day: 'Day 53', link: 'day53.html' },
        { day: 'Day 57', link: 'day57.html' }
      ]
    },
    inspiration: {
      name: 'Inspiration',
      desc: 'Motivate, uplift, and encourage others! These speeches help you share positive messages and spark hope in your listeners.',
      days: [
        { day: 'Day 5', link: 'day5.html' },
        { day: 'Day 20', link: 'day20.html' },
        { day: 'Day 22', link: 'day22.html' },
        { day: 'Day 27', link: 'day27.html' },
        { day: 'Day 30', link: 'day30.html' },
        { day: 'Day 32', link: 'day32.html' },
        { day: 'Day 35', link: 'day35.html' },
        { day: 'Day 37', link: 'day37.html' },
        { day: 'Day 42', link: 'day42.html' },
        { day: 'Day 46', link: 'day46.html' },
        { day: 'Day 48', link: 'day48.html' },
        { day: 'Day 50', link: 'day50.html' },
        { day: 'Day 51', link: 'day51.html' },
        { day: 'Day 56', link: 'day56.html' },
        { day: 'Day 59', link: 'day59.html' },
        { day: 'Day 60', link: 'day60.html' }
      ]
    },
    roleplay: {
      name: 'Roleplay',
      desc: 'Step into different roles and have fun! These speeches let you act, pretend, and use your imagination to bring stories and characters to life.',
      days: [
        { day: 'Day 19', link: 'day19.html' },
        { day: 'Day 29', link: 'day29.html' },
        { day: 'Day 40', link: 'day40.html' },
        { day: 'Day 49', link: 'day49.html' },
        { day: 'Day 54', link: 'day54.html' },
        { day: 'Day 58', link: 'day58.html' }
      ]
    },
    character: {
      name: 'Character Acting',
      desc: 'Practice voices, accents, and personalities! These speeches are all about creativity and bringing unique characters to your audience.',
      days: [
        { day: 'Day 6', link: 'day6.html' },
        { day: 'Day 23', link: 'day23.html' },
        { day: 'Day 33', link: 'day33.html' },
        { day: 'Day 43', link: 'day43.html' },
        { day: 'Day 52', link: 'day52.html' }
      ]
    }
  };

  const detailsDiv = document.getElementById('category-details');
  const btns = document.querySelectorAll('.category-btn');

  function renderCategory(catKey) {
    const cat = categories[catKey];
    if (!cat) return;
    detailsDiv.innerHTML = `
      <div class="category-detail-card">
        <span class="category-tag cat-${catKey}">${cat.name}</span>
        <p class="category-desc">${cat.desc}</p>
        <ul class="category-days">
          ${cat.days.map(d => `<li><a href="${d.link}">${d.day}</a></li>`).join('')}
        </ul>
      </div>
    `;
    btns.forEach(b => b.classList.remove('active'));
    document.querySelector(`.category-btn[data-category="${catKey}"]`).classList.add('active');
  }

  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      renderCategory(this.getAttribute('data-category'));
    });
  });

  // Show first category by default
  renderCategory('confidence');
});
