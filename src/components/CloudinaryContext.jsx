'use client';
import React from 'react';
import PropTypes from 'prop-types';
import CloudinaryComponent from '../components/CloudinaryComponent';
import { extractCloudinaryProps, CloudinaryContextType } from '../Util/CloudinaryContextType';

/**
 * Provides a container for Cloudinary components. Any option set in CloudinaryContext will be passed to the children.
 *
 * @example
 *<CloudinaryContext cloudName="mycloud" dpr="auto">
 *    <!-- other tags -->
 *    <Image publicId={id}/>
 *</CloudinaryContext>
 *
 */
class CloudinaryContext extends CloudinaryComponent {
  render() {
    const props = { ...this.getContext(), ...this.props };

    const {
      children, cloudinaryProps, nonCloudinaryProps, cloudinaryReactProps
    } = extractCloudinaryProps(props);

    return (
      <CloudinaryContextType.Provider value={cloudinaryProps}>
        {cloudinaryReactProps.includeOwnBody ? children : <div {...nonCloudinaryProps}>{children}</div>}
      </CloudinaryContextType.Provider>
    );
  }
}

CloudinaryContext.propTypes = { ...CloudinaryComponent.propTypes, includeOwnBody: PropTypes.bool };
CloudinaryContext.defaultProps = { includeOwnBody: false };

export default CloudinaryContext;
