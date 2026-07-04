import type { ReactElement } from 'react';
import { PageHero } from '@/components/blocks/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Prose } from '@/components/ui/Prose';
import { site } from '@/content/site';

const lastUpdated = 'June 2025';

/**
 * Privacy policy page. Plain-English explanation of what NZ Marine collects,
 * how it is used and the rights members have under the NZ Privacy Act 2020.
 */
export function Privacy(): ReactElement {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        intro="How NZ Marine collects, uses and protects your personal information, and how to get in touch about it."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Privacy policy' }]}
      />

      <Section tone="paper">
        <Container size="prose">
          <Prose>
            <p>
              The {site.name} ({site.short}) is committed to protecting your
              privacy. This policy explains what personal information we collect,
              why we collect it and how we look after it. It applies to this
              website and to the information we hold about members, event
              attendees and people who get in touch with us.
            </p>
            <p>
              We handle personal information in line with the{' '}
              <a
                href="https://www.privacy.org.nz/privacy-act-2020/"
                target="_blank"
                rel="noreferrer"
              >
                New Zealand Privacy Act 2020
              </a>{' '}
              and its information privacy principles. If anything here is
              unclear, you can contact us using the details at the foot of this
              page.
            </p>
            <p>
              <strong>Last updated:</strong> {lastUpdated}.
            </p>

            <h2>What we collect</h2>
            <p>We collect personal information when you choose to give it to us, including when you:</p>
            <ul>
              <li>
                <strong>Enquire about membership or join NZ Marine.</strong> Your
                name, company, role, email address, phone number and the details
                you provide about your business.
              </li>
              <li>
                <strong>Register for an event or function.</strong> Your name,
                contact details, company and any dietary or accessibility notes
                you share so we can host you well.
              </li>
              <li>
                <strong>Subscribe to our newsletter or industry updates.</strong>{' '}
                Your name and email address.
              </li>
              <li>
                <strong>Contact us.</strong> Your name, contact details and the
                content of your message or enquiry.
              </li>
            </ul>
            <p>
              We also collect limited technical information automatically when
              you browse the site, such as your IP address, browser type and the
              pages you view. This is covered under cookies and analytics below.
            </p>

            <h2>How we use your information</h2>
            <p>We use the personal information we hold to:</p>
            <ul>
              <li>respond to membership enquiries and manage member accounts;</li>
              <li>process event registrations and keep you informed about events you have booked;</li>
              <li>send the newsletter and industry updates you have asked for;</li>
              <li>list Recognised Members in our public directory, where membership includes a directory listing;</li>
              <li>improve the website and understand how it is used; and</li>
              <li>meet our legal and administrative obligations as an industry association.</li>
            </ul>
            <p>
              We only use your information for the purpose you gave it to us, or
              for a directly related purpose you would reasonably expect. We do
              not sell your personal information.
            </p>

            <h2>Cookies and analytics</h2>
            <p>
              This website uses cookies, which are small text files stored on your
              device. Some are needed for the site to work, and others help us
              understand how visitors use the site so we can keep improving it. We
              use a privacy-respecting analytics tool to measure page views and
              traffic in aggregate, and we do not use it to identify you
              personally.
            </p>
            <p>
              You can set your browser to refuse cookies or to alert you when a
              site sets one. Some parts of the site may not work as expected if
              you turn cookies off.
            </p>

            <h2>Third parties we work with</h2>
            <p>
              We share personal information with a small number of service
              providers who help us run the association. These include:
            </p>
            <ul>
              <li>
                <strong>Stripe</strong>, which processes membership and event
                payments. Your card details are handled by Stripe under its own
                privacy terms, and we do not store full card numbers.
              </li>
              <li>
                <strong>Our analytics and email providers</strong>, which help us
                measure site traffic and send the updates you have subscribed to.
              </li>
            </ul>
            <p>
              These providers may handle your information outside New Zealand. We
              choose providers that apply comparable privacy safeguards, and we
              only share what they need to do their job. We do not pass your
              information to anyone else for marketing.
            </p>

            <h2>How long we keep it</h2>
            <p>
              We keep personal information only for as long as we need it. Member
              records are held for the life of the membership and for a
              reasonable period afterwards to meet our financial and legal
              obligations. Event registration details are kept long enough to run
              the event and account for it. Newsletter subscriptions are kept
              until you unsubscribe, which you can do from any email we send.
            </p>

            <h2>Keeping your information safe</h2>
            <p>
              We take reasonable steps to protect personal information from loss,
              misuse and unauthorised access. Access to member and event records
              is limited to the people who need it to do their work, and our
              service providers are expected to keep your information secure.
            </p>

            <h2>Your rights</h2>
            <p>
              Under the Privacy Act 2020 you have the right to ask what personal
              information we hold about you and to ask us to correct it if it is
              wrong. You can also ask us to stop sending you marketing at any
              time. We will respond to requests as soon as we reasonably can.
            </p>

            <h2>Contact us about privacy</h2>
            <p>
              If you have a question, want to access or correct your information,
              or wish to make a complaint about how we have handled your privacy,
              please get in touch.
            </p>
            <ul>
              <li>
                Email:{' '}
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                Phone: <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li>
                Post: {site.name}, {site.address.line1}, {site.address.country}
              </li>
            </ul>
            <p>
              If you are not satisfied with our response, you can contact the{' '}
              <a
                href="https://www.privacy.org.nz/"
                target="_blank"
                rel="noreferrer"
              >
                Office of the Privacy Commissioner
              </a>
              .
            </p>
          </Prose>
        </Container>
      </Section>
    </>
  );
}
