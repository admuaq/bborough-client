import React, { Component } from 'react'
import '../borough.css'

class LondonBoroughs extends Component {
  constructor (props) {
    super(props)
    this.state = {
        selectedBorough: undefined
     }
  }

  handleBoroughClick = (e) => {
    this.setState({
        selectedBorough: e.target.id
    })
    this.props.handleBoroughClick(e.target.id)
    if (document.getElementsByClassName('selected-borough')[0]) {
        document.getElementsByClassName('selected-borough')[0].setAttribute('class', '')
    }

    e.target.setAttribute('class', 'selected-borough')
  }

  render () {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' width='477.523' height='369.95'><defs>
        <clipPath>
          <path d='M0 0h5396v1275.73h-5396v-1275.73z' />
        </clipPath>
        <clipPath>
          <path d='M0 0v1276h5396v-1276h-5396z' />
        </clipPath>
        <clipPath>
          <path d='M5021.33 1153.39s-83.41-27.95-127.65-66.71c-28.62-23.56-48.13-55.42-56.05-91.196 31.61 17.066 63.94 27.946 63.94 27.946l299.8 97.84s11.68-227.805-122.36-328.032c38.95 7.696 83.86 24.336 135.31 53.586 168.94 96.043 181.86 340.576 182.01 410.166v2.69c-.02 10.23-.31 16.05-.31 16.05l-374.69-122.34z' />
        </clipPath>
        <clipPath>
          <path d='M4937.43 579.273l-284.6 610.277 643.7 300.17 284.59-610.279-643.69-300.168z' />
        </clipPath>
        <linearGradient gradientTransform='matrix(-154.031 330.318 -330.318 -154.031 5207.09 841.267)' gradientUnits='userSpaceOnUse' x2='1'><stop offset='0' stopColor='#00adef' /><stop offset='.8' stopColor='#254aa5' /><stop offset='1' stopColor='#2e3192' /></linearGradient>
        <clipPath>
          <path d='M4799.5 970.047c-30.44-25.059-48.03-61.867-48.03-102.188 0-75.547 67.07-136.738 149.81-136.738 40.43-1.105 91.36 10.957 154.76 47.051 8.07 4.57 15.69 9.621 22.97 15.066-21.07-4.179-40.43-5.742-58.1-5.222-103.41 0-187.25 76.543-187.25 170.937 0 12.481 1.37 24.735 3.97 36.531-13.76-7.449-27.37-16.054-38.13-25.437' />
        </clipPath>
        <clipPath>
          <path d='M4833.37 1137.31l360.59-208.201-196.85-340.918-360.59 208.231 196.85 340.888z' />
        </clipPath>
        <linearGradient gradientTransform='matrix(293.553 -169.484 169.484 293.553 4775.14 943.65)' gradientUnits='userSpaceOnUse' x2='1'><stop offset='0' stopColor='#cce427' /><stop offset='1' stopColor='#007a38' /></linearGradient>
        <clipPath>
          <path d='M0 0h5396v1275.73h-5396v-1275.73z' />
        </clipPath>
      </defs>
      <g stroke='#1d90dd'>
        <path id='Havering' onClick={this.handleBoroughClick} d='M361.608 58.047l17.912.731 32.9-7.677 20.471 15.719-2.193 8.042 5.118 1.828 12.794 32.169 14.622.366 12.429 19.374-38.749 10.236-1.462 12.063-8.773-6.946-22.664 44.232-48.253-3.656 5.849-126.482z' fill='#fff' fillRule='evenodd' />
        <path id='Bexley' onClick={this.handleBoroughClick} d='M370.747 157.843l13.526 7.677 4.752 14.622 4.752 3.656 14.257-2.193 4.752 4.387-6.946 16.45-28.513 33.997 2.559 24.127-48.984-4.387-5.118-102.355 44.963 4.021z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' strokeLinejoin='round' />
        <path id='Redbridge' onClick={this.handleBoroughClick} d='M298.733 56.585l13.891 12.429 23.395 8.408 2.924-8.773 23.03-10.236 8.042 12.429v12.794l-15.353 57.392-38.018 5.118-45.694-41.308 4.387-36.921 23.395-11.332z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' />
        <path id='Enfield' onClick={this.handleBoroughClick} d='M180.293 22.223l10.601-14.257 41.308-6.214 43.501 8.408 2.924 25.954 6.58 4.752-13.891 63.241-119.536-12.063 28.513-69.821z' fill='#fff' fillRule='evenodd' />
        <path id='Waltham Forest' onClick={this.handleBoroughClick} d='M256.694 78.518l6.58-2.193 1.462-3.656-.731-1.462 17.547-32.9 12.063 6.214 5.483 12.063-6.946 7.677 5.849 8.042-5.483 13.891 9.504 48.619-57.758.731-10.601-45.329 23.03-11.698z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' strokeLinejoin='round' />
        <path id='Sutton' onClick={this.handleBoroughClick} d='M148.124 273.724l4.021 12.794v12.794l4.752-1.462 10.601 18.643-5.849 9.139 8.773 6.214 9.87-11.332 28.513 21.933 44.963-59.22-54.468-32.9-51.178 23.395z' fill='#fff' fillRule='evenodd' />
        <path id='Kingston upon Thames' onClick={this.handleBoroughClick} d='M163.112 271.896l-11.698 13.16-5.849 1.828-15.719 10.967-10.601 27.051-11.332 8.773-2.924-2.193-2.193-19.009 9.504-19.374 4.387-4.752-5.118-11.332h-3.656l-13.16-15.353 14.622-35.824 36.921 3.656 16.815 42.404z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' />
        <path id='Bromley' onClick={this.handleBoroughClick} d='M324.87 223.643l27.417 26.32 9.139-2.193 18.095 6.763 1.828 11.149-5.483 3.473-7.311 40.211-7.677.548-2.011 12.612-16.633 12.429 4.752 17.729-27.234 5.666-8.042-9.687-9.687 9.687-12.063-39.845-69.455-88.647 104.366-6.214z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' />
        <path id='Croydon' onClick={this.handleBoroughClick} d='M244.961 245.411l13.825 20.232 2.36-1.349 9.441 12.476v9.441l5.395-3.372 9.104 20.232 4.384 4.384 4.046 20.232-13.488-7.418-14.162 7.755-.337 5.395-20.906 5.395-.674 5.395-17.534 23.266-10.79-8.43-10.116-3.372-2.698-17.197 8.093-3.709-2.023-16.185 17.871-6.744-18.883-63.73 26.976-10.453 10.116 7.755z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' />
        <path id='Barking and Dagenham' onClick={this.handleBoroughClick} d='M323.158 133.773l12.511-6.804 5.707 2.634 17.998-19.315-1.317-17.12 12.291-14.047 1.097 11.633-.658 11.852-2.634 3.951 9.438 5.926 11.194-1.756 5.048 10.974-13.389 22.168-3.292 17.559-15.583-4.39-22.878 6.227-15.532-29.492z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' />
        <path id='Newham' onClick={this.handleBoroughClick} d='M274.871 125.652l23.924-4.609 13.608.878-2.195-6.804 3.731-.658 10.096 8.56 4.829 21.729 11.194 4.39 8.56 16.461-36.215 19.754-49.823-33.581 12.291-26.119z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' strokeLinejoin='round' />
        <path id='Greenwich' onClick={this.handleBoroughClick} d='M305.16 227.712l3.731-3.731 16.681 16.681 9.218-7.682-2.195-2.634 6.146-6.804-.439-10.974-3.731-2.853.658-8.779 9.218-6.146 5.926.219 6.146-5.487-.878-30.728-16.461 2.853-9.218 10.974-28.972 2.853-16.461-13.169-13.827 25.46 34.459 39.946z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' strokeLinejoin='round' />
        <path id='Tower Hamlets' onClick={this.handleBoroughClick} d='M277.539 131.58l-.466 11.329 4.811 6.518.776 6.518 5.898 2.638 3.259 9.467-3.259.155-3.259 4.811 2.018 7.139-1.707 5.742-43.145.776-2.018-47.801 37.092-7.294z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' strokeLinejoin='round' />
        <path id='Hackney' onClick={this.handleBoroughClick} d='M243.551 158.274l2.794-13.968 15.52-2.483 11.64-9.002 3.725-1.242.155-6.363-6.518-6.674-9.312-.776-18.624-20.331-28.091 4.19 7.294 46.094 21.417 10.554z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' strokeLinejoin='round' />
        <path id='Islington' onClick={this.handleBoroughClick} d='M220 106.557l25.241 25.68-5.268 1.536-1.097 5.707-4.829 5.048 8.121 12.73-31.167 10.096-10.755-60.578 19.754-.219z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' strokeLinejoin='round' />
        <path id='City of London' onClick={this.handleBoroughClick} d='M224.39 159.014l8.999-5.268 4.829 3.073 3.292-1.975 2.634-.219 2.853 7.901-5.268 8.999-15.803-1.317-1.536-11.194z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' strokeLinejoin='round' />
        <path id='Merton' onClick={this.handleBoroughClick} d='M147.131 236.053l-1.536 6.585 6.146 20.193-2.853 7.462 18.437 14.705 6.146-7.243 9.877 1.756 8.56-7.243 5.707 3.731 17.559-1.756 3.951-8.34-9.438-39.946-47.409-1.756-15.144 11.852z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' />
        <path id='Lewisham' onClick={this.handleBoroughClick} d='M243.485 238.467l18.656 4.829 8.999-2.853 7.682 4.17-2.414 3.292 7.023 3.951 20.412-14.925 5.926 4.39 2.195-8.34-5.487-3.731.219-3.951-12.291-16.242.219-6.585 4.829-5.707-18.437 1.975-5.487-12.291-13.608-10.755-11.413 7.462-7.023 55.31z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' strokeLinejoin='round' />
        <path id='Southwark' onClick={this.handleBoroughClick} d='M228.121 167.793l7.682-.878 7.243 1.756 9.438 4.39 10.755-7.682 7.243 4.17v11.633l-11.194 1.756.219 16.461 5.707 15.144-3.512 4.17-5.707-.439-4.609 14.705-4.39 3.073-1.756 9.877-24.143-33.801 7.023-44.336z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' strokeLinejoin='round' />
        <path id='Haringey' onClick={this.handleBoroughClick} d='M176.815 74.466l79.306-.155 4.656 2.638-4.501 11.329-1.552 10.088-4.501 6.518-16.761 2.173-5.122 8.226-8.381-8.226-39.731 10.864-3.414-43.456z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' strokeLinejoin='round' />
        <path id='Lambeth' onClick={this.handleBoroughClick} d='M208.321 247.047l-3.57 5.432 12.726 3.414 8.07-11.795 19.71 2.173-14.278-28.867 6.518-9.157-1.862-6.208-8.691-13.502 3.259-7.139-3.725-3.725 2.018-9.933-18.934-2.173-10.088 38.955 8.846 42.524z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' strokeLinejoin='round' />
        <path id='Wandsworth' onClick={this.handleBoroughClick} d='M125.755 202.661l21.417 33.833 14.589-5.122 6.829 1.707 11.95-5.277.931 9.778 3.57-1.242.776 6.363 12.881 4.656 1.086-1.707 8.691 2.018 3.414-3.414.466-16.451-8.536-21.262 9.467-8.846 1.862-10.088-38.489-9.312-50.905 24.366z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' strokeLinejoin='round' />
        <path id='Westminster' onClick={this.handleBoroughClick} d='M188.638 186.503l26.534 1.483 5.487-20.631 6.445.091-1.163-9.922-25.307-22.601-44.723-.052 32.727 51.632z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' />
        <path id='Camden' onClick={this.handleBoroughClick} d='M182.907 108.972l23.924 1.536.878 12.291 11.852 16.461 6.585 19.095-9.218 3.512-10.316-6.585-5.707-13.608-17.998-1.097-6.146 3.731-19.315-23.924 25.46-11.413z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' strokeLinejoin='round' />
        <path id='Barnet' onClick={this.handleBoroughClick} d='M113.55 54.54l24.802-5.926 4.829-14.047 9.438-.439 16.022-9.877 12.95-2.634v7.023l16.242 4.39 1.317 9.218 13.389 13.608-9.218 14.486 3.073 5.048-3.731 10.974-4.39-5.707-2.853 5.707.219 9.657-5.268 10.535-16.681 17.339h-23.924l-36.215-69.357z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' strokeLinejoin='round' />
        <path id='Kensington and Chelsea' onClick={this.handleBoroughClick} d='M165.788 142.992l.878 10.096 8.121 2.195 11.413 21.29h7.243l4.829-4.609 3.292 15.364-28.313 12.072-20.412-43.458 12.95-12.95z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' strokeLinejoin='round' />
        <path id='Hammersmith and Fulham' onClick={this.handleBoroughClick} d='M164.251 200.277l9.877 8.56 11.633-1.975 1.536-10.755-21.729-21.729-5.487-16.461 1.975-19.095-34.678 1.975 21.729 55.31 15.144 4.17z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' strokeLinejoin='round' />
        <path id='Brent' onClick={this.handleBoroughClick} d='M130.451 78.463l14.925 20.631-2.634 4.609 3.512 10.535 1.975-3.512 5.926 1.317 24.582 30.947-2.195 5.926-8.56-3.073-2.414 3.512-19.315-1.756-12.072 8.34-45.872-13.608 5.707-56.188 36.434-7.682z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' strokeLinejoin='round' />
        <path id='Harrow' onClick={this.handleBoroughClick} d='M72.317 127.896l16.238-3.937 9.349 3.937 3.937-11.317.605-9.894 11.59-8.312 11.916.984-3.937-8.365 13.286-5.905-22.143-31-7.873-3.937-7.381 8.857-42.81 17.222 17.222 51.667z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' strokeLinejoin='round' />
        <path id='Richmond upon Thames' onClick={this.handleBoroughClick} d='M66.361 247.027l3.951 11.852 15.583 1.756 20.193 15.803 6.585-3.292 3.731-25.241-5.048-6.804 4.39-3.951 13.827 9.657 22.826-17.778-9.218-12.072 2.634-8.56 10.755.219 1.097-7.023 7.023-.878-6.365-12.511-11.852-4.39-77.697 9.218-2.414 53.993z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' />
        <path id='Hounslow' onClick={this.handleBoroughClick} d='M29.269 218.933l3.951 17.339 11.633 7.462 7.682-2.634 7.682 7.462 12.072.219-1.756-7.901 10.535-9.218-11.633-4.829 4.39-9.218 7.682-2.195 19.095 1.317 20.851-26.777h7.682l7.462 11.194 8.779-.658.878-8.34 4.829-4.609v-7.901l-15.583-10.535-101.402 1.317-4.829 48.506z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' strokeLinejoin='round' />
        <path id='Hillingdon' onClick={this.handleBoroughClick} d='M2.139 206.24l33.62 15.7 17.987-18.267-4.429-8.857 4.921-16.73 5.413-1.476 13.778-26.571-24.111-6.397 12.302-5.413-.492-3.937 11.317-5.905-18.206-54.127-22.143-4.429-5.905 5.413-21.651-15.254-1.476 27.556 13.286 41.333-8.85 15.201 5.905 29.803-11.264 32.356z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' strokeLinejoin='round' />
        <path id='Ealing' onClick={this.handleBoroughClick} d='M59.777 177.012l11.194 3.512 3.731-1.756 5.707 5.268 9.218-6.365 3.951 3.731 23.046-1.097 4.829-4.829 6.146-.219 6.804 5.268 8.779-.439 1.756-5.926 3.512-3.292-2.634-16.242 2.634-7.682-7.462-3.731-5.487 6.365h-8.121v-7.462l-10.316 5.048-5.707-12.511-13.608-7.023-8.999-3.951-16.022 4.17-10.974 6.365-.219 3.512-11.852 6.146 23.265 5.926-13.169 27.216z' fill='#fff' fillRule='evenodd' strokeWidth='1.75' strokeLinejoin='round' />
      </g>
      </svg>
    )
  }
}

export default LondonBoroughs
