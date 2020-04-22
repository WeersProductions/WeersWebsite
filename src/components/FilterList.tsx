import * as React from 'react'
import * as filterListStyles from "./FilterList.module.scss"
import CheckboxButton from './CheckboxButton'

export interface filter {
  name: string,
  checked:  boolean
}

export interface filterListProps {
    filters: filter[]
    onChange: (change: filter) => void
}

export class FilterList extends React.Component<filterListProps, {}> {
  constructor(props: filterListProps) {
    super(props);
  }

  public render() {
    return (
      <div className={filterListStyles.container}>
        <div className={filterListStyles.prefix}>Filters:</div>
        {this.props.filters.map((filter) => {
            return (<CheckboxButton key={filter.name} text={filter.name} checked={filter.checked} onChange={
                (checked) => this.props.onChange({name: filter.name, checked: checked})
            }/>)
        })}
      </div>
    )
  }
}