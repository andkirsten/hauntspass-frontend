import React from 'react';
import './About.css';

function About() {
  return (
    <section className="mx-auto">
      <div className="about__heading">
        <h1 className="about__title text-3xl">About Us</h1>
      </div>
      <div className="about__content p-6 space-y-6">
        <p>
          Daybreak Haunts is a volunteer group started in 2014 that maps
          Daybreak home locations that want to share their Halloween decorations
          or a special Halloween event. In 2022, the "Haunts Pass" was created
          as a fundraiser for the Utah Food Bank allowing families to donate and
          receive rewards at participating locations.
        </p>
        <hr className="my-3 mx-10 h-0.5 border-t-0 bg-primary opacity-100 dark:opacity-50" />
        <p>
          Since 2014 we've partnered with neighbors to create a free
          one-night-only haunted house called Deadbreak. Though we love to see
          families experience Halloween in our community, we all know there are
          families that need food more than candy. Through the years we have
          tried to add a charitable element by asking people to donate to the
          Utah Food Bank as a thank you/entrance fee. In 2022, we had an idea to
          allow Utah Food Bank donors skip the long line. Other generous
          neighbors liked the idea and volunteered to participate by providing
          an extra trick-or-treating reward to donors. Thus, the "Haunts Pass"
          was born.
        </p>
        <p>
          In 2023, we expanded the "Haunts Pass" to include more local
          businesses and rewards available throughout the month of October in
          addition to the homes providing extra treats and gifts on Halloween
          night. We love the idea of the Daybreak community coming together to
          help those in need in Utah for what has become quite the community
          event. Without the support of Daybreak neighbors and local businesses,
          this wouldn't be possible. Thank you!
        </p>
      </div>
    </section>
  );
}

export default About;
