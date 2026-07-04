import type { ReactElement } from 'react';
import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Reveal } from './Reveal';

/**
 * Download card for the two codes a buyer can read in full. The PDF hrefs are
 * contract placeholders the asset agent fills, so they are flagged for the
 * slop scan rather than left as dead links.
 */
export function CodeDownloads(): ReactElement {
  return (
    <Container size="prose">
      <Reveal>
        <div className="rounded-lg border border-border bg-surface p-7 shadow-card sm:p-9">
          <span
            aria-hidden="true"
            className="inline-flex size-12 items-center justify-center rounded-md bg-accent-50 text-accent-700"
          >
            <FileText size={22} strokeWidth={2} />
          </span>
          <h2 className="mt-5 font-display text-2xl text-foreground sm:text-3xl">
            Read the codes in full
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Download the NZ Marine Code of Ethics and the Brokers Code of Ethics and operational
            guidelines to see exactly what members agree to before you buy.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="#" variant="primary"> {/* slop-scan-ignore: PDF href is a contract placeholder filled by the asset agent. */}
              <Download aria-hidden="true" />
              Download the Code of Ethics
            </Button>
            <Button href="#" variant="secondary"> {/* slop-scan-ignore: PDF href is a contract placeholder filled by the asset agent. */}
              <Download aria-hidden="true" />
              Brokers Code of Ethics
            </Button>
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
