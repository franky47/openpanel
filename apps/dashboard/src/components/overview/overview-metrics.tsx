'use client';

import { WidgetHead } from '@/components/overview/overview-widget';
import { useOverviewOptions } from '@/components/overview/useOverviewOptions';
import { ChartSwitch } from '@/components/report/chart';
import { Widget, WidgetBody } from '@/components/widget';
import { useEventQueryFilters } from '@/hooks/useEventQueryFilters';
import { cn } from '@/utils/cn';

import type { IChartInput } from '@openpanel/validation';

interface OverviewMetricsProps {
  projectId: string;
}

export default function OverviewMetrics({ projectId }: OverviewMetricsProps) {
  const { previous, range, interval, metric, setMetric, startDate, endDate } =
    useOverviewOptions();
  const [filters] = useEventQueryFilters();
  const isPageFilter = filters.find((filter) => filter.name === 'path');
  const reports = [
    {
      id: 'Visitors',
      projectId,
      startDate,
      endDate,
      events: [
        {
          segment: 'user',
          filters,
          id: 'A',
          name: isPageFilter ? 'screen_view' : 'session_start',
          displayName: 'Visitors',
        },
      ],
      breakdowns: [],
      chartType: 'metric',
      lineType: 'monotone',
      interval,
      name: 'Visitors',
      range,
      previous,
      metric: 'sum',
    },
    {
      id: 'Sessions',
      projectId,
      startDate,
      endDate,
      events: [
        {
          segment: 'session',
          filters,
          id: 'A',
          name: isPageFilter ? 'screen_view' : 'session_start',
          displayName: 'Sessions',
        },
      ],
      breakdowns: [],
      chartType: 'metric',
      lineType: 'monotone',
      interval,
      name: 'Sessions',
      range,
      previous,
      metric: 'sum',
    },
    {
      id: 'Pageviews',
      projectId,
      startDate,
      endDate,
      events: [
        {
          segment: 'event',
          filters,
          id: 'A',
          name: 'screen_view',
          displayName: 'Pageviews',
        },
      ],
      breakdowns: [],
      chartType: 'metric',
      lineType: 'monotone',
      interval,
      name: 'Pageviews',
      range,
      previous,
      metric: 'sum',
    },
    {
      id: 'Views per session',
      projectId,
      startDate,
      endDate,
      events: [
        {
          segment: 'user_average',
          filters,
          id: 'A',
          name: 'screen_view',
          displayName: 'Views per session',
        },
      ],
      breakdowns: [],
      chartType: 'metric',
      lineType: 'monotone',
      interval,
      name: 'Views per session',
      range,
      previous,
      metric: 'average',
    },
    {
      id: 'Bounce rate',
      projectId,
      startDate,
      endDate,
      events: [
        {
          segment: 'event',
          filters: [
            {
              id: '1',
              name: 'properties.__bounce',
              operator: 'is',
              value: ['true'],
            },
            ...filters,
          ],
          id: 'A',
          name: 'session_end',
          displayName: 'Bounce rate',
        },
        {
          segment: 'event',
          filters: filters,
          id: 'B',
          name: 'session_end',
          displayName: 'Bounce rate',
        },
      ],
      breakdowns: [],
      chartType: 'metric',
      lineType: 'monotone',
      interval,
      name: 'Bounce rate',
      range,
      previous,
      previousIndicatorInverted: true,
      formula: 'A/B*100',
      metric: 'average',
      unit: '%',
    },
    {
      id: 'Visit duration',
      projectId,
      startDate,
      endDate,
      events: [
        {
          segment: 'property_average',
          filters: [
            {
              name: 'duration',
              operator: 'isNot',
              value: ['0'],
              id: 'A',
            },
            ...filters,
          ],
          id: 'A',
          property: 'duration',
          name: isPageFilter ? 'screen_view' : 'session_end',
          displayName: isPageFilter ? 'Time on page' : 'Visit duration',
        },
      ],
      breakdowns: [],
      chartType: 'metric',
      lineType: 'monotone',
      interval,
      name: 'Visit duration',
      range,
      previous,
      formula: 'A/1000',
      metric: 'average',
      unit: 'min',
    },
  ] satisfies (IChartInput & { id: string })[];

  const selectedMetric = reports[metric]!;

  return (
    <>
      <div className="col-span-6 flex flex-wrap gap-4">
        {reports.map((report, index) => (
          <button
            key={index}
            className={cn(
              'group relative col-span-3 min-w-[170px] transition-all max-md:flex-1 md:col-span-2 lg:col-span-1 [&_[role="heading"]]:text-sm',
              index === metric && 'z-10 scale-[101%] rounded-xl shadow-md'
            )}
            onClick={() => {
              setMetric(index);
            }}
          >
            <ChartSwitch hideID {...report} />
            {/* add active border */}
          </button>
        ))}
      </div>
      <Widget className="col-span-6">
        <WidgetHead>
          <div className="title">{selectedMetric.events[0]?.displayName}</div>
        </WidgetHead>
        <WidgetBody>
          <ChartSwitch
            key={selectedMetric.id}
            hideID
            {...selectedMetric}
            chartType="linear"
          />
        </WidgetBody>
      </Widget>
    </>
  );
}
